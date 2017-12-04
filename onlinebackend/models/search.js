const mongoose = require('mongoose');

var SearchSchema = mongoose.Schema({

    _id: {
      type: String,
      required: true
    },
    children: [{
      type: String,
      required: true
    }]
  }
//  collection: 'searchs'
);

const Search = module.exports = mongoose.model('Search', SearchSchema);

module.exports.getCountryById = function (id, callback) {

  //console.log
  // var database = [];
  Search.find({}, callback);
}
//  const query = {id: id};

 // Search.findById(id, callback);
 // Search.find({},callback);
  //console.log(callback.children);



 // callback(null, 'true');
    /*if(err) {
      console.log(err);;
      res.status(500).send();
    }
    else {
     // var responseObject = foundData;
     // responseObject = { count: foundData.length};
     // res.send(responseObject);
    }
  });*/
 // console.log('hai');


/*module.exports.getStateById = function (id, callback) {
  Search.findById(id, callback);
}

module.exports.getCityById = function (id, callback) {
  Search.findById(id, callback);
}*/
