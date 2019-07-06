const assert = require('assert').strict;
const gcd = require('./index');

assert.equal( 1, gcd(18,35));
assert.equal( 17657, gcd(28851538,1183019));

console.info('OK!');
process.exit();
