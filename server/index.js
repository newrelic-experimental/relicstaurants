var newrelic = require('newrelic');
var express = require('express');
var fs = require('fs');
var open = require('open');
var logger = require('morgan');
var bodyParser = require('body-parser');

var RestaurantRecord = require('./model').Restaurant;
var MemoryStorage = require('./storage').Memory;

var API_URL = '/api/restaurant';
var API_URL_ID = API_URL + '/:id';
var API_URL_ORDER = '/api/order';
var API_URL_VALIDATION = '/api/validation';

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


  // API
  app.get(API_URL, function(req, res, next) {
    return res.status(200).send(storage.getAll().map(removeMenuItems));
  });


  app.post(API_URL, function(req, res, next) {
    var restaurant = new RestaurantRecord(req.body);
    var errors = [];

    if (restaurant.validate(errors)) {
      storage.add(restaurant);
      return res.status(201).send(restaurant);
    }

    return res.status(400).send({error: errors});
  });

  app.post(API_URL_ORDER, function(req, res, next) {
    console.log(req.body);
    return res.status(201).send({ orderId: Date.now()});
  });

  app.post(API_URL_VALIDATION, function(req, res, next) {
    if (req.body.ccnum.length <= 15) {
      let err = new Error('payments.js, cardNumber is invalid');
      newrelic.noticeError(err);
      return res.status(400).send(err);
    }
    return res.status(200).send();
  });


  app.get(API_URL_ID, function(req, res, next) {
    var restaurant = storage.getById(req.params.id);

    if (restaurant) {
      return res.status(200).send(restaurant);
    }

    return res.status(400).send({error: 'No restaurant with id "' + req.params.id + '"!'});
  });


  app.put(API_URL_ID, function(req, res, next) {
    var restaurant = storage.getById(req.params.id);
    var errors = [];

    if (restaurant) {
      restaurant.update(req.body);
      return res.status(200).send(restaurant);
    }

    restaurant = new RestaurantRecord(req.body);
    if (restaurant.validate(errors)) {
      storage.add(restaurant);
      return res.status(201).send(restaurant);
    }

    return res.status(400).send({error: errors});
  });


  app.delete(API_URL_ID, function(req, res, next) {
    if (storage.deleteById(req.params.id)) {
      return res.status(204).send(null);
    }

    return res.status(400).send({error: 'No restaurant with id "' + req.params.id + '"!'});
  });

  // start the server
  // read the data from json and start the server
  fs.readFile(DATA_FILE, function(err, data) {
    JSON.parse(data).forEach(function(restaurant) {
      storage.add(new RestaurantRecord(restaurant));
    });

    app.listen(PORT, function() {
      open('http://localhost:' + PORT + '/');
    });
  });

};
