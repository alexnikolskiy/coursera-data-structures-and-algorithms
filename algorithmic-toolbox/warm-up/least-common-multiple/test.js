const assert = require('assert').strict;
const lcm = require('./index');

assert.equal( 24, lcm(6,8));
assert.equal( 1933053046, lcm(28851538, 1183019));

console.info('OK!');
process.exit();
