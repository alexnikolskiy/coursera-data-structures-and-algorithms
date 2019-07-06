const assert = require('assert').strict;
const generateSwaps = require('./index');

let swaps = generateSwaps([5, 4, 3, 2, 1]);
assert.equal(3, swaps.length);
assert.deepEqual([[1, 4], [0, 1], [1, 3]], swaps);

swaps = generateSwaps([1, 2, 3, 4 ,5]);
assert.equal(0, swaps.length);

console.info('OK!');
process.exit();
