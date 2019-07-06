const assert = require('assert').strict;
const partition = require('./index');

assert.equal(1, partition([1, 1, 1], 3));
assert.equal(0, partition([3, 3, 3, 3], 3));
assert.equal(0, partition([40], 3));
assert.equal(1, partition([3, 5, 7, 2, 4], 3));
assert.equal(1, partition([4, 1, 4, 1, 3, 2], 3));
assert.equal(1, partition([1, 1, 3, 4, 2, 4], 3));
assert.equal(0, partition([7, 2, 2, 2, 2, 2, 2, 2, 3], 3));
assert.equal(1, partition([17, 59, 34, 57, 17, 23, 67, 1, 18, 2, 59], 3));
assert.equal(1, partition([1, 2, 3, 4, 5, 5, 7, 7, 8, 10, 12, 19, 25], 3));

console.info('OK!');
process.exit();
