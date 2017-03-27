var express = require('express');
var request = require('request');
var mongoose = require('mongoose');
var Promise = require("bluebird");

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

exports.addRecipe = function(req, res) {
  db.Recipe.create(req.body);
};