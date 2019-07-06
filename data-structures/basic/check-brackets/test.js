const assert = require('assert').strict;
const findMismatch = require('./index');

assert.equal('Success', findMismatch('[]'));
assert.equal('Success', findMismatch('{}[]'));
assert.equal('Success', findMismatch('[()]'));
assert.equal('Success', findMismatch('(())'));
assert.equal('Success', findMismatch('{[]}()'));
assert.equal(1, findMismatch('{'));
assert.equal(1, findMismatch('}'));
assert.equal(5, findMismatch('asd }'));
assert.equal(1, findMismatch('{ s: 1'));
assert.equal(11, findMismatch('const a = { s: 1'));
assert.equal(3, findMismatch('{[}'));
assert.equal('Success', findMismatch('foo(bar);'));
assert.equal(10, findMismatch('foo(bar[i);'));
assert.equal(3, findMismatch('[](()'));

console.info('OK!');
process.exit();
