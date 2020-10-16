const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const assert= require('assert');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// initialise middleware

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//connect to databse
const db = require('./config/connectDB').MongoURI;

mongoose
.connect(
  
  db,
  { useNewUrlParser: true ,useUnifiedTopology: true}

)
.then(() => console.log('MongoDB Connected....'))
.catch(err => console.log(err));


//PORT CONNETION
const PORT = process.env.PORT ||5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));


