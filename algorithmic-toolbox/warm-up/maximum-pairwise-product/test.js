const assert = require('assert').strict;
const max = require('./index.js');

let arr = [1, 2, 3];
assert.equal(6, max(arr));

arr = [7, 5, 14, 2, 8, 8, 10, 1, 2, 3];
assert.equal(140, max(arr));

console.info('OK!');
process.exit();
