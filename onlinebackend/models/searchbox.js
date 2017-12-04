const mongoose = require('mongoose');

let SearchboxScehma = {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  linkname: {
    type: String,
    required: true
  }
};

let Searchbox = module.exports = mongoose.model('Searchbox', SearchboxScehma);

module.exports.getLink = function(query, callback) {
  Searchbox.find(
    {
      "description": { "$regex": query, "$options": "i"}
    },
    callback
    );
}
