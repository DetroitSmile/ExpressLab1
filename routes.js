"use strict";

const express = require("express");
const cartItems = express.Router();

const cartList = [ 
  {
    id: 0,
    product: `hat`,
    price: 30,
    quantity: `1`
  },
  {
    id: 1,
    product: `bat`,
    price: 40,
    quantity: `1`
  },
  {
    id: 2,
    product: `cat`,
    price: 50,
    quantity: `1`
  }

]
cartItems.get("/cart-items", function(req,res) {
  console.log("GET request made");
  res.send(cartList);
})
cartItems.post("/cart-items", function(req, res){
  cartList.push(req.body);
  console.log("POST method made");
  res.send(cartList);
});
cartItems.put("/cart-items/:id", function(req, res) {
  for(let i = 0; i < cartList.length; i++) {
    if(cartList[i].id == req.params.id) {
      cartList.splice(i, 1, req.body);
      console.log(req.body)
      console.log(req.params)
      res.send(cartList);
      break;
    }
  }
  console.log("DELETE rquest made")
});
cartItems.delete("cart-items/:id", function(req, res) {
  for(let i=0; i < cartList.length; i++) {
    if(cartList[i].id == req.params.id) {
      cartList.splice(i, 1);
      res.send(cartList);
      break;
    }
  }
  console.log("Delete request made")
});
module.exports = cartItems