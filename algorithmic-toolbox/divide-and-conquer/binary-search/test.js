const assert = require('assert').strict;
const binarySearch = require('./index');

assert.equal(2, binarySearch([1, 5, 8, 12, 13], 8));
assert.equal(0, binarySearch([1, 5, 8, 12, 13], 1));
assert.equal(-1, binarySearch([1, 5, 8, 12, 13], 23));
assert.equal(0, binarySearch([1, 5, 8, 12, 13], 1));
assert.equal(-1, binarySearch([1, 5, 8, 12, 13], 11));

console.info('OK!');
process.exit();
