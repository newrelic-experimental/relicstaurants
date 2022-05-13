var PORT = process.env.PORT || 3000;
var STATIC_DIR = __dirname + '/../build';
var DATA_FILE = __dirname + '/data/restaurants.json';
require('newrelic');
require('./index').start(PORT, STATIC_DIR, DATA_FILE);
