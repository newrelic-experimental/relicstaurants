require('newrelic');

var PORT = process.env.PORT || 3003;
var STATIC_DIR = __dirname + '/../build';
var DATA_FILE = __dirname + '/../data/restaurants.json';

require('./index').start(PORT, STATIC_DIR, DATA_FILE);
