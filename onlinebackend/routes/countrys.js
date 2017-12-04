const express = require('express');
const router = express.Router();
const Country = require('../models/country');

//CountryAdd
router.post('/country',(req, res, next)=>{
  const countryInfo = new Country({
   /* _id: 12345,*/
    name: req.body.name,
    countries: req.body.countries
  });

  // console.log(req.body.firstname);
  Country.addCountry(countryInfo, (err, country)=>{
    if(err)
      res.json({success: false, msg: 'Failed to add the country'});
    else
      res.json({success: true, msg: 'Country has been added'});
  });

});

router.get('/searchcountry', (req, res, next) => {

  const name = 'Country';
  //var children = {};
  Country.getCountryById(name,(err,search) =>{
    if(err)
    //   res.json('error');
      throw err;

    if(!search) {
      return res.json({success: false, msg: 'Unsuccessful'});
    }
    else {
      console.log(search.countries);
      // var countries = search.countries;
      let countries = search.countries.split(',');
    //  countries = JSON.stringify(countries);

    //  countries=JSON.parse("["+countries+"]");
      res.json(
      countries
      // search.countries
      //  children: search.children
      );
    }
    // res.json({search: req.search});
  });
});

module.exports = router;
