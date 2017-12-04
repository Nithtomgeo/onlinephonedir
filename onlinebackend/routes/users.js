const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const router = express.Router();
const User =  require('../models/user');
const passport = require('passport');
const passportService = require('../config/passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const request = require('request');
//const cors = require('cors');
//var user;

var token='';
//router.use(cors());
//router.use(bodyParser.urlencoded({ extended: true }));
//router.use(bodyParser.json());
//router.use(passport.initialize());
//router.use(passport.session());
//require('../config/passport')(passport);

//Register
router.post('/register',(req, res, next)=>{
  let newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    phonenumber: req.body.phonenumber,
    address: req.body.address,
/*    dob: req.body.dob,
    gender: req.body.gender,*/
    });

  User.addUser(newUser, (err, user)=>{
    if(err)
      res.json({success: false, msg: 'Failed to register the user'});
    else
      res.json({success: true, msg: 'User has been registered'});
  });

});

router.post('/authenticate',(req, res, next)=>{
  var email = req.body.email;
  var password = req.body.password;

  User.getUserByUsername(email,(err, user)=>{
    if(err)
      throw err;
    if(!user)
    {
      return res.json({success:false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch)=>{
      if(err)
        throw err;
      if(isMatch){
        token = jwt.sign({data:user}, config.secret, {
            expiresIn: 640000
          });
        res.json({
          success: true,
          token: 'Bearer ' + token,
          user: {
            id: user._id,
            firstname: user.firstname,
            email: user.email
          }
        });
       // console.log(token);
      }
      else
        return res.json({success:false, msg: 'Wrong Password'});
    });


  });
});

router.post('/robotcaptcha', (req, res) => {
  if (req.body.captcha === undefined || req.body.captcha === '' || req.body.captcha === null) {
    return res.json({success:false, msg: 'Select a captcha'});
  }
  const secretKey = '6LcMrzUUAAAAADjKAaqRgQLRluz8Sqtvtzop2ggd';
  const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&' +
    'remoteip=${req.connection.remoteAddress}`;

  request(verifyUrl, (err, response, body)=>{
    body = JSON.parse(body);

    if(body.success !== undefined && !body.success){
      return res.json({success: false, msg: 'Failed captcha verification'});
    }
    else
      return res.json({success: true, msg: 'Captcha passed'});
  });
});

//require('../config/passport')(passport);
//protecting any route, put "authenticate('jwt', {session: "false"})"
//console.log("Welcome");
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
//router.get('/profile',(req, res, next)=>{
  //console.log("Welcome");
  res.json({user:req.user});
});

module.exports = router;
