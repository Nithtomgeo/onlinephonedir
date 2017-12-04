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

  //countryInfo.update({ name: 'Country' },{ $push: { countries: countryInfo.countries } });
  //countryInfo.update(countryInfo.countries);
  //Country.update(callback);

  State.update(
    /*  {
        _id: 12345
      },*/
    {
      name: stateInfo.name
    },
    {
      /*$push: { countries: "Srilanka"}*/
      $push: { states: stateInfo.states}
    },
    {
      upsert: true,
    },
    callback
  );

  // stateInfo.save(callback);
  //countryInfo.save({_id: 'Country'},{$set: {countries: 'USA'}});
}

module.exports.getStateById = function (name, callback) {

  const query={name: name};
  // var database = [];
  State.findOne(query, callback);
}
