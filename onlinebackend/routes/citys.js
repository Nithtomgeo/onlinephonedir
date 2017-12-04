const express = require('express');
const router = express.Router();
const City = require('../models/city');

//StateAdd
router.post('/city',(req, res, next)=>{
  const cityInfo = new City({
    name: req.body.name,
    citys: req.body.citys
  });

  // console.log(req.body.firstname);
  City.addCity(cityInfo, (err, state)=>{
    if(err)
      res.json({success: false, msg: 'Failed to add the city'});
    else
      res.json({success: true, msg: 'City has been added'});
  });

});

router.get('/searchcity/:param1', (req, res, next) => {

  const name = req.params.param1;
  //var children = {};
  City.getCityById(name,(err,search) =>{
    if(err)
    //   res.json('error');
      throw err;

    if(!search) {
      return res.json({success: false, msg: 'Unsuccessful'});
    }
    else {
      let cities = search.citys.split(',');
      res.json(
        cities
        //  children: search.children


      );
    }
    // res.json({search: req.search});
  });

});
module.exports = router;
