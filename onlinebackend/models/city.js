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

  //countryInfo.update({ name: 'Country' },{ $push: { countries: countryInfo.countries } });
  //countryInfo.update(countryInfo.countries);
  //Country.update(callback);

  City.update(
    /*  {
        _id: 12345
      },*/
    {
      name: cityInfo.name
    },
    {
      /*$push: { countries: "Srilanka"}*/
      $push: { citys: cityInfo.citys}
    },
    {
      upsert: true,
    },
    callback
  );

 // cityInfo.save(callback);
  //countryInfo.save({_id: 'Country'},{$set: {countries: 'USA'}});
}

module.exports.getCityById = function (name, callback) {

  const query={name: name};
  // var database = [];
  City.findOne(query, callback);
  //Console.log(callback);
}
