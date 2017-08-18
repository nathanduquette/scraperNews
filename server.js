// dependencies
var express = require("express");
var mongojs = require("mongojs");

// initialize express
var app = express();

// set static folder for web
app.use(express.static("puplic"));

// data config/ save data url/ name of collection
var datbaseUrl = "news";
var collections = ["stories"];

// mongojs connects the db to db var
var db = mongojs(databaseUrl, collections);

// console any errors mongodb runs into
db.on("error", function(error) {
    console.log("DATABASE ERROR: ", error);
});

// routes
// route 1. "/news" path will display the scraped news stories and the comments box
app.get("/news", function(req,res) {
    db.stories.find({}, function(error, found) {
        if (error) {
            console.log(error);
        }
        else {
            res.json(found);
        }
    });
});

// route 2. ""