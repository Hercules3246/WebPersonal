const jwt = require("../services/jwt");
const moment = require("moment");
const User = require("../models/user");

function willExpiredToken(token) {
  const { exp } = jwt.decodedToken(token);
  const currrentDate = moment().unix();

  if (currrentDate > exp) {
    return true;
  }
  false;
}

function refreshAccessToken(req, res){
    console.log("Estamos refrescando el access token");
} 

module.exports = {
    refreshAccessToken();
}