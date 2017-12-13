/* model for adding the details of the user*/

const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  cellnumber: {
    type: Number,
    required: true
  },
  homenumber: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});

var Adddetail = module.exports = mongoose.model('Adddetail', UserSchema);

module.exports.addUser = function (userInfo, callback) {
      userInfo.save(callback);
     };

module.exports.getUser = function (userInfo1, userInfo2, userInfo3, callback) {
  const query = {country: userInfo1, state: userInfo2, city: userInfo3};

  Adddetail.find(query, callback);
};

