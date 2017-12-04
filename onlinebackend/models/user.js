const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const passportService = require('../config/passport');

var UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
/*  dob: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  }*/
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = function (email, callback) {
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10,(err, salt) => {
    bcrypt.hash(newUser.password, salt,(err,hash) => {
      if(err)
        throw err;
      newUser.password = hash;
      newUser.save(callback);

    });
  });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch)=>{
    if(err)
      throw err;
    callback(null, isMatch);
  });
}
