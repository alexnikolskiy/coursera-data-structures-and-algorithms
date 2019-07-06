const assert = require('assert').strict;
const max = require('./index');

assert.equal(180.0000, max(3, 50, [120, 100, 60], [30, 50, 20]));
assert.equal(180.0000, max(3, 50, [60, 100, 120], [20, 50, 30]));
assert.equal(166.6667, max(1, 10, [500], [30]));

console.info('OK!');
process.exit();
