/* City schema creation and adding and retrieving city information*/

const mongoose = require('mongoose');

var CitySchema = mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  citys: {
    type: String,
    required: true
  }
});

var City = module.exports = mongoose.model('City', CitySchema);

module.exports.addCity = function (cityInfo, callback) {

  City.update(
    {
      name: cityInfo.name
    },
    {
      $push: { citys: cityInfo.citys}
    },
    {
      upsert: true,
    },
    callback
  );
};

module.exports.getCityById = function (name, callback) {

  const query={name: name};
  City.findOne(query, callback);
};
