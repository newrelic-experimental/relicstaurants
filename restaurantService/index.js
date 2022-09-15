var express = require('express');
var fs = require('fs');
var logger = require('morgan');
var bodyParser = require('body-parser');

var RestaurantRecord = require('./model').Restaurant;
var MemoryStorage = require('./storage').Memory;

var API_URL = '/api/restaurants';

var removeMenuItems = function(restaurant) {
  var clone = {};

  Object.getOwnPropertyNames(restaurant).forEach(function(key) {
    if (key !== 'menuItems') {
      clone[key] = restaurant[key];
    }
  });

  return clone;
};


exports.start = function(PORT, STATIC_DIR, DATA_FILE) {
  var app = express();
  var storage = new MemoryStorage();

  // log requests
  app.use(logger('combined'));

  // serve static files for demo client
  app.use(express.static(STATIC_DIR));

  // parse body into req.body
  app.use(bodyParser.json());

  // set header to prevent cors errors
  app.use(function(_req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'newrelic, tracestate, traceparent'),
    next();
  });


  // API
  app.get(API_URL, function(_req, res, _next) {
    const response = res.status(200).send(storage.getAll().map(removeMenuItems));
    return response;
  });


  app.post(API_URL, function(req, res, _next) {
    var restaurant = new RestaurantRecord(req.body);
    var errors = [];

    if (restaurant.validate(errors)) {
      storage.add(restaurant);
      return res.status(201).send(restaurant);
    }

    return res.status(400).send({error: errors});
  });

  // start the server
  // read the data from json and start the server
  fs.readFile(DATA_FILE, function(_err, data) {
    JSON.parse(data).forEach(function(restaurant) {
      storage.add(new RestaurantRecord(restaurant));
    });

    app.listen(PORT, function() {
      console.log('Go to http://localhost:' + PORT + '/');
    });
  });


  // Windows and Node.js before 0.8.9 would crash
  // https://github.com/joyent/node/issues/1553
//  try {
//    process.on('SIGINT', function() {
//      // save the storage back to the json file
//      fs.writeFile(DATA_FILE, JSON.stringify(storage.getAll()), function() {
//        process.exit(0);
//      });
//    });
//  } catch (e) {}

};
