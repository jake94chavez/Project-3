const express = require('express');
const app = express();
const roughDraftRouter = require('./config/routes.js');
const mongoose = require('mongoose');
let ENV;

try {
	ENV = require('./env');
} catch (ex) {
	ENV = process.env
}

mongoose.connect(ENV.MONGODB_URI);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(roughDraftRouter);

let port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Listening on port ${ port }`);
});

module.exports = app;