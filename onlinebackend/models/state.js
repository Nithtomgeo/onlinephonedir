/* State schema creation and adding and retrieving state information*/

const mongoose = require('mongoose');

var StateSchema = mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  states: {
    type: String,
    required: true
  }
});

var State = module.exports = mongoose.model('State', StateSchema);

module.exports.addState = function (stateInfo, callback) {

  State.update(
    {
      name: stateInfo.name
    },
    {
       $push: { states: stateInfo.states}
    },
    {
      upsert: true,
    },
    callback
  );
};

module.exports.getStateById = function (name, callback) {

  const query={name: name};
  State.findOne(query, callback);
};
