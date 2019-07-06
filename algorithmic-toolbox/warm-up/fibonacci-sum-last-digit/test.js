const assert = require('assert').strict;
const lastDigit = require('./index');

assert.equal(0, lastDigit(0));
assert.equal(1, lastDigit(1));
assert.equal(4, lastDigit(3));
assert.equal(5, lastDigit(100));
assert.equal(3, lastDigit(832564823476));

console.info('OK!');
process.exit();
