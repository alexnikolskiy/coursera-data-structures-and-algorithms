const assert = require('assert').strict;
const editDistance = require('./index');

assert.equal(0, editDistance('ab', 'ab'));
assert.equal(3, editDistance('short', 'ports'));
assert.equal(5, editDistance('editing', 'distance'));

console.info('OK!');
process.exit();
