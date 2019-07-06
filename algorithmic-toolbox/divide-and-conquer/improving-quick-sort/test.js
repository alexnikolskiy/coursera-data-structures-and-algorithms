const assert = require('assert').strict;
const quickSort3 = require('./index');

assert.deepEqual([2, 2, 2, 3, 9], quickSort3([2, 3, 9, 2, 2]));
assert.deepEqual([3, 5, 7, 7, 7, 7], quickSort3([3, 7, 7, 5, 7, 7]));
assert.deepEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], quickSort3([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
assert.deepEqual([ 1, 2, 2, 2, 2, 3 ], quickSort3([2, 3, 2, 2, 1, 2]));
assert.deepEqual([0, 0, 0, 0, 0, 0], quickSort3([0, 0, 0, 0, 0, 0]));

console.info('OK!');
process.exit();
