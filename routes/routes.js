"use strict";
const express = require("express");
const cartItems = express.Router();
const pool = require("../connection/connection");

function selectAll(req, res) {
  pool.query("select * from ShoppingCart").then(function(result) {
    res.send(result.rows);
  });
}

cartItems.get("/cart-items", function(req,res) {
  selectAll(req,res);
});

cartItems.post("/cart-items", function(req, res){
  pool.query("insert into ShoppingCart (product, price, quantity) values ($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(function(result){
    selectAll(req,res);
  });
});

cartItems.put("/cart-items/:id", function(req, res) {
  pool.query("update ShoppingCart set product=$1::text, price=$2::int, quantity=$3::int where id=$4::int", [req.body.product, req.body.price, req.body.quantity,req.params.id]).then(function(){
    selectAll(req, res);
  });
});

cartItems.delete("/cart-items/:id", function(req, res) {
  pool.query("Delete from ShoppingCart where id=$1::int", [req.params.id])
  .then(function(){
    selectAll(req, res);
  });
});

module.exports = cartItems;