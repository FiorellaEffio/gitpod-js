global.window = global;
global.assert = require('chai').assert;
require('../src/index.js');
require('./data.spec.js');