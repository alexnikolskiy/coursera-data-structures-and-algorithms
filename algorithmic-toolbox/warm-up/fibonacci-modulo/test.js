const assert = require('assert').strict;
const fibMod = require('./index');

assert.equal(1, fibMod(2015, 3));
assert.equal(161, fibMod(239, 1000));
assert.equal(151, fibMod(2816213588, 239));

console.info('OK!');
process.exit();
