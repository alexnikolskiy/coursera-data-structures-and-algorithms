const assert = require('assert').strict;
const min = require('./index');

assert.equal(2, min(400, 4, [0, 200, 375, 550, 750, 950]));
assert.equal(-1, min(3, 4, [0, 1, 2, 5, 9, 10]));

console.info('OK!');
process.exit();
