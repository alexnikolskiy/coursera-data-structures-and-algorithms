const assert = require('assert').strict;
const computeHeight = require('./index');

assert.equal(3, computeHeight([4, -1, 4, 1, 1]));
assert.equal(4, computeHeight([-1, 0, 4, 0, 3]));
assert.equal(4, computeHeight([9, 7, 5, 5, 2, 9, 9, 9, 2, -1]));

console.info('OK!');
process.exit();
