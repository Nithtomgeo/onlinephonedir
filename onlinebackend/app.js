const _ = require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const config = require('./config/database');
const passportService = require('./config/passport');

//require.js;

//Connection to database
mongoose.connect(config.database);

//On Connection
mongoose.connection.on('connected',()=>{
  console.log('Connected to database' + config.database);
});

//On Error Connection
mongoose.connection.on('error',(err)=>{
  console.log('Error connecting to database' + err);
});

/* decalring the routes fot the various api's */

var app = express();

var port = 3000;

var users = require('./routes/users');

// var searchs = require('./routes/searchs');

var adddetails = require('./routes/adddetails');

var countrys = require('./routes/countrys');

var states = require('./routes/states');

var citys = require('./routes/citys');

var searchboxes = require('./routes/searchboxes');

//var states = require('./routes/state');

//app.use(passport.initialize());
//CORS Middleware

app.use(cors());

app.use(express.static(path.join(__dirname,'../public')));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Passport Middleware

//var session = require("express-session");
//app.use(passport.initialize());

//require('./config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());
 // app.use(app);

require('./config/passport')(passport);

/* routes for the different api's */

app.use('/users',users);
// app.use('/search',searchs);
app.use('/adddetails',adddetails);
app.use('/countrys',countrys);
app.use('/states',states);
app.use('/citys',citys);
app.use('/searchboxes',searchboxes);

//app.use();
//app.use('/search',searches);

//Index Route
app.get('/',(req, res)=>{
  res.send('Invalid endpoint');
});

/* Common public directory for client server communication */
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start Server
app.listen(port, () => {
  console.log('Server started on port' + port);
});

module.exports = app;
