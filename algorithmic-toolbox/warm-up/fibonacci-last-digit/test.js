const assert = require('assert').strict;
const fib = require('./index');

assert.equal(2, fib(3));
assert.equal(1, fib(239));
assert.equal(9, fib(331));
assert.equal(5, fib(327305));

console.info('OK!');
process.exit();
