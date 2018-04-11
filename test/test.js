var assert = require('assert');
var utils = require('../utils');

it('changes all the letters to uppercase', function() {
  assert.equal(utils.toUpperCase("heLLo"), "HELLO")
});

it('returns string length', function() {
  assert.equal(utils.stringLength("heLLo"), 5)
});