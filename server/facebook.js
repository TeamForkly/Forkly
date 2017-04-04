var express = require('express');
var db = require('../db/index.js');
var User = db.User;
var configAuth = require('../react/env/config');

const passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

// Use facebook strategy
passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: ['id', 'displayName', 'email', 'friends']
  },
   function(accessToken, refreshToken, profile, done) {
      // console.log('profile: ', profile);
      // console.log('accessToken', accessToken);
      // console.log('refreshToken', refreshToken);
       //check user table for anyone with a facebook ID of profile.id
       User.findOneAndUpdate({
           'facebook.id': profile.id
       }, {'friends': profile._json.friends.data}, function(err, user) {
           if (err) {
               return done(err);
           }
           //No user was found... so create a new user with values from Facebook (all the profile. stuff)
           if (!user) {
               user = new User({
                   name: profile.displayName,
                   email: profile.emails[0].value,
                   provider: 'facebook',
                   friends: profile._json.friends.data,
                   //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
                   facebook: profile._json
               });
               user.save(function(err) {
                   if (err) console.log(err);
                   return done(err, user);
               });
           } else {
               //found user && updated
               return done(err, user);
           }
       });
   }
));

// save user id into session (in memory)
passport.serializeUser(function(user, done) {
  // console.log('serialize user: ', user);
  done(null, user.id);
});

// attach user object to request
passport.deserializeUser(function(id, done) {
  // console.log('deserialize id: ', id);
  User.findById(id, function(err, user) {
    // console.log('deserialize user: ', user);
    done(err, user);
  });
});