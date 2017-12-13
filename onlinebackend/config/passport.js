/* using the passport jwt strategy for authentication*/

const _ = require('lodash');
const passport = require('passport');
const JwtStrategy = require("passport-jwt").Strategy;
//var LocalStrategy = require("passport-local").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passportService = require('../config/passport');
const User = require('../models/user');
const config = require('../config/database');

module.exports = function (passport) {


  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
}
  //console.log("helo");
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
   // console.log(jwt_payload);
    User.getUserById(jwt_payload.data._id, (err, user) => {
      if (err)
        return done(err, false);
      if (user)
        return done(null, user);
      else
        return done(null, false);
    });
  }));
//  passport.use(strategy);
};
