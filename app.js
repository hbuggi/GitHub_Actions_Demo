const express = require("express");
const app = express();
var MongoClient = require('mongodb').MongoClient;

const food_items = ['Pasta','Bread','Pizza','Pancake'];

app.get("/", (req, res) => {
  MongoClient.connect('mongodb://127.0.0.1:27017', (err,db)=>{
    if (!err){
      res.json('connected')
    }else{
      res.json('Could not connect to DB')
    }
  })
});

app.get("/fooditems", (req, res) => {
    return res.json(food_items);
  });

module.exports = app;
