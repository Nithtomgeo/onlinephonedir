/* Rest api for adding the state or retrieving the state information */

const express = require('express');
const router = express.Router();
const State = require('../models/state');

//StateAdd
router.post('/state',(req, res, next)=>{
  const stateInfo = new State({
    name: req.body.name,
    states: req.body.states
  });

  // console.log(req.body.firstname);
  State.addState(stateInfo, (err, state)=>{
    if(err)
      res.json({success: false, msg: 'Failed to add the state'});
    else
      res.json({success: true, msg: 'State has been added'});
  });

});

router.get('/searchstate/:param1', (req, res, next) => {

  const name = req.params.param1;
  //var children = {};
  State.getStateById(name,(err,search) =>{
    if(err)
    //   res.json('error');
      throw err;

    if(!search) {
      return res.json({success: false, msg: 'Unsuccessful'});
    }
    else {
     // console.log(search.states);
      let states = search.states.split(',');
      res.json(
        states
      );
    }
  });
});

module.exports = router;
