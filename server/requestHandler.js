var express = require('express');
var request = require('request');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var db = require("../db/index.js");

// for Home Component - from searchRecipes function
exports.searchRecipes = function(req, res) {
  var searchTerm = req.body.searchTerm;
 
  // regex -> allows the search to contain string instead of === string
  // options i -> allows search to be case insensitive
  db.Recipe.find({name:{'$regex' : searchTerm, '$options' : 'i'}})
    .exec(function (err, recipe) {
      if (err) 
      	{
      	  return err;
      	} else {
      	res.json(recipe);
      }
	});
};

// for Nav Component - from getUsername function
exports.getUsername = function(req, res) {
  if (req.user) {
    res.json(req.user.name);  
  } else {
    res.json('Forker Of Forks');
  }
};

// for viewRecipes Component - get all recipes for user
exports.getUserRecipes = function(req, res) {
  console.log('INSIDE HANDLER: GET USER RECIPES');
  db.User.findById(req.user._id)
  .populate('recipes')
  .exec(function(err, user) {
    console.log('WHAT IS THIS', user);
    res.send(user.recipes);
  });
}

exports.addRecipe = function(req, res) {
  if (req.user) {
    req.body._creator = req.user._id;

    // create recipe in database
    db.Recipe.create(req.body).then((recipe) => {
      // push recipe into user's recipes array
      db.User.findByIdAndUpdate(req.user._id, {$push: {recipes: recipe.id}})
      .then(() => {
        res.end();
      })
    });
  } else {
    res.end();
  }
};