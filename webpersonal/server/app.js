const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require("./config");

//Load routing

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configuracion Header HTTP

//RRouter Basic

module.exports = app;
