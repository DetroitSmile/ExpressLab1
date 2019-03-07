"use strict";
const express = require("express");
const app = express();
const cartItems = require("./routes/routes");

app.use(express.static("./public"));
app.use(express.json());
app.use("/", cartItems);

// change the port number to 5000
app.listen(5000, function() {
  console.log("Server is running");
});


