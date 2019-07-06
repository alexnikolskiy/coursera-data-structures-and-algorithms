const assert = require('assert').strict;
const change = require('./index');

assert.equal(2, change(2));
assert.equal(9, change(34));

console.info('OK!');
process.exit();
