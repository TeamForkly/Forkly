var express = require('express');
var request = require('request');
var mongoose = require('mongoose');
// const ApiKeys = require('../config/api_config');
mongoose.Promise = require('bluebird');

var db = require("../db/index.js");

// for Home Component - from searchRecipes function
exports.searchRecipes = function(req, res) {
  var searchTerm = req.body.searchTerm;
  const url = `https://api.edamam.com/search?q=${searchTerm}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}&from=0&to=5&calories=gte%20591,%20lte%20722`;

  request({
    uri: url,
    method: 'GET',
    params: {
      q: searchTerm,
      health: 'alcohol-free',
    }
  }, (error, response, body) => {
    if (error) {
      console.error('edamam GET request error');
    } else {
      console.log('edamam request successful');
      res.status(200).send(body);
    }
  });


 
  // regex -> allows the search to contain string instead of === string
  // options i -> allows search to be case insensitive
  // db.Recipe.find({name:{'$regex' : searchTerm, '$options' : 'i'}})
  //   .exec(function (err, recipe) {
  //     if (err) 
  //     	{
  //     	  return err;
  //     	} else {
  //     	res.json(recipe);
  //     }
	// });
};

// for Nav Component - from getUsername function
exports.getUsername = function(req, res) {
  if (req.user) {
    res.json(req.user.name);  
  } else {
    res.json(null);
  }
};

// for viewRecipes Component - get all recipes for user
exports.getUserRecipes = function(req, res) {
  if (req.user) {
    db.User.findById(req.user._id)
    .populate('recipes')
    .exec(function(err, user) {
      res.send(user.recipes);
    });
  } else {
    res.end();
  }
}

exports.addRecipe = function(req, res) {
  if (req.user) {
    req.body._creator = req.user._id;

    // create recipe in database
    let recipeId;
    return db.Recipe.create(req.body).then((recipe) => {
      // push recipe into user's recipes array
      recipeId = recipe.id;
      return db.User.findByIdAndUpdate(req.user._id, {$push: {recipes: recipe.id}});
    })
    .then(() => {
      res.json(recipeId);
    })
  } else {
    res.end();
  }
};

exports.getRecipeById = function(req, res) {
  db.Recipe.findById(req.body.id)
  .then((recipe) => {
    res.json(recipe);
  })
};

exports.getUserFriends = function(req, res) {
  if (req.user) {
    db.User.findById(req.user._id)
      .exec(function(err, user) {
        if (err) {
          console.log(err);
          req.status(404);
        } else {
          res.send(user.friends);
        }
      });
  } else {
    res.end();
  }
};

exports.getFriendRecipes = function(req, res) {
  db.User.findOne({ 'name': req.body.name})
    .exec(function(err, user) {
      if (err) { 
        res.status(404);
      } 
      else {
        res.send(user.recipes);
      }
    });
}