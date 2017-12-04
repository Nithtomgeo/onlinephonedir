const express = require('express');
const router = express.Router();
const Adddetail = require('../models/adddetail');


//Register
router.post('/infoadd',(req, res, next)=>{
  const userInfo = new Adddetail({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    cellnumber: req.body.cellnumber,
    homenumber: req.body.homenumber,
    address: req.body.address,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city

  });

 // console.log(req.body.firstname);
  Adddetail.addUser(userInfo, (err, adddetail)=>{
    if(err)
      res.json({success: false, msg: 'Failed to add the user details'});
    else
      res.json({success: true, msg: 'User details has been added'});
  });

});

router.get('/searchuser/:param1/:param2/:param3', (req, res, next) => {

  const value1 = req.params.param1;
  const value2 = req.params.param2;
  const value3 = req.params.param3;

  //var children = {};
  Adddetail.getUser(value1, value2, value3,(err,search) =>{
    if(err)
    //   res.json('error');
      throw err;

    if(!search) {
      return res.json({success: false, msg: 'Unsuccessful'});
    }
    else
      res.json(
        search
        //  children: search.children


      );
    // res.json({search: req.search});
  });
});

module.exports = router;
