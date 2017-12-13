/* Country schema creation and adding and retrieving country information*/

const mongoose = require('mongoose');

var CountrySchema = mongoose.Schema ({

  name: {
    type: String,
    required: true
  },
  countries: {
    type: String,
    required: true
  }
});

var Country = module.exports = mongoose.model('Country', CountrySchema);

var temp = Country;
module.exports.addCountry = function (countryInfo, callback) {

  Country.update(
    {
      name: countryInfo.name
    },
    {
        $push: { countries: countryInfo.countries}
    },
    {
      upsert: true,
    },
    callback
  );

};

module.exports.getCountryById = function (name, callback) {

  const query={name: name};
  Country.findOne(query, callback);
}
