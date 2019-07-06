const assert = require('assert').strict;
const optimalWeight = require('./index');

assert.equal(9, optimalWeight(10, [1, 4, 8]));

console.info('OK!');
process.exit();
