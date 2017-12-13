/* Rest api for adding the country or retrieving the country information */

const express = require('express');
const router = express.Router();
const Country = require('../models/country');

//CountryAdd
router.post('/country',(req, res, next)=>{
  const countryInfo = new Country({
    name: req.body.name,
    countries: req.body.countries
  });

  Country.addCountry(countryInfo, (err, country)=>{
    if(err)
      res.json({success: false, msg: 'Failed to add the country'});
    else
      res.json({success: true, msg: 'Country has been added'});
  });
});

router.get('/searchcountry', (req, res, next) => {

  const name = 'Country';
  Country.getCountryById(name,(err,search) =>{
    if(err)
      throw err;

    if(!search) {
      return res.json({success: false, msg: 'Unsuccessful'});
    }
    else {
      // console.log(search.countries);
      let countries = search.countries.split(',');
      res.json(
      countries
      );
    }
  });
});

module.exports = router;
