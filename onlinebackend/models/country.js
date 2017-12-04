const mongoose = require('mongoose');

var CountrySchema = mongoose.Schema ({
/*  _id:
    {
      type: Number,
      required: true
    },*/
  name: {
    type: String,
    required: true
  },
  countries: {
    type: String,
    required: true
  }
}/*,
  {
    _id:false
  }*/
  );

var Country = module.exports = mongoose.model('Country', CountrySchema);

var temp = Country;
module.exports.addCountry = function (countryInfo, callback) {

  //countryInfo.update({ name: 'Country' },{ $push: { countries: countryInfo.countries } });
  //countryInfo.update(countryInfo.countries);
  //Country.update(callback);
  // countryInfo.countries.push(countryInfo.countries);
/*  const query = {name:countryInfo.name};
  Country.findOne(query,temp);*/


  Country.update(
  /*  {
      _id: 12345
    },*/
    {
      name: countryInfo.name
    },
    {
      /*$push: { countries: "Srilanka"}*/
      $push: { countries: countryInfo.countries}
    },
    {
      upsert: true,
    },
    callback
  );

   // Country.save(callback);
 //countryInfo.save({_id: 'Country'},{$set: {countries: 'USA'}});
};

module.exports.getCountryById = function (name, callback) {

  const query={name: name};
  // var database = [];
  Country.findOne(query, callback);
}
