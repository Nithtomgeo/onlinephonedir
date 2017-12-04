const express = require('express');
const router = express.Router();
const Search = require('../models/search');
const bodyParser = require('body-parser');

router.get('/country', (req, res, next) => {

  const id = 'Country';
  //var children = {};
  Search.getCountryById(id,(err,search) =>{
    if(err)
   //   res.json('error');
     throw err;

    if(!search) {
      return res.json({success: false, msg: 'Unsuccessful'});
    }
    else
      res.json({
        success: true,
       search: {
          id: search._id,
        //  children: search.children
        }

      });
   // res.json({search: req.search});
  });
});

module.exports = router;
