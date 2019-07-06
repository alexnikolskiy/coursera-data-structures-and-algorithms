const assert = require('assert').strict;
const fib = require('./index');

assert.equal(55, fib(10));
assert.equal(102334155, fib(40));

console.info('OK!');
process.exit();
