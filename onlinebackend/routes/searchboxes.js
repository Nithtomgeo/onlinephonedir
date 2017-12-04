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
        /*let tit=search[0].title;
        console.log(tit);*/
      res.json({
        search
        /*success: true,
        search : {
          title: search.title,
          description: search.description,
          link: search.link
        }*/
      });
    }
  });
});

module.exports = router;
