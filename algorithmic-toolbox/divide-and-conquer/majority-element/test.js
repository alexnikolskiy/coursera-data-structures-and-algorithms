const assert = require('assert').strict;
const hasMajority = require('./index');

assert.equal(1, hasMajority([2, 3, 9, 2, 2]));
assert.equal(0, hasMajority([1, 2, 3, 4]));
assert.equal(0, hasMajority([1, 2, 3, 1]));
assert.equal(0, hasMajority([512766168, 717383758, 5, 126144732, 5, 573799007, 5, 5, 5, 405079772]));
assert.equal(1, hasMajority([2, 2, 3, 3, 3]));
assert.equal(1, hasMajority([2, 2, 2, 3, 3]));
assert.equal(1, hasMajority([1, 0, 1, 0, 1]));
assert.equal(1, hasMajority([1, 1, 1, 1, 1]));

console.info('OK!');
process.exit();
