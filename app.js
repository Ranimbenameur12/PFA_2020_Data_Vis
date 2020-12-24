const express = require('express');
const mongoose = require('mongoose');
const http =  require('http');
const bodyparser = require('body-parser');
const app = express();

// body parser mddleware 
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db,{useNewUrlParser: true })
  
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


  const server = http.createServer(app);
  server.listen(3000);
  