/* Rest Api for fetching the search data */

const express = require('express');
const router = express.Router();
const Searchbox = require('../models/searchbox');

router.get('/searchbox/:param1',(req, res, next)=>{
  const data = req.params.param1;
  Searchbox.getLink(data,(err,search)=>{
    if(err) {
      throw(err);
    }
    if(!search) {
      return res.json({success: false} , {msg: 'Unsuccessful'});
    }
    else {
      res.json({
        search
      });
    }
  });
});

module.exports = router;
