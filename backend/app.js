const express = require('express');

const app = express();

app.use((req, res, next)=>{
  console.log("Help");
  next();
});

app.use((req, res, next)=>{
  res.send("Man I don't understand");
});

module.exports = app;
