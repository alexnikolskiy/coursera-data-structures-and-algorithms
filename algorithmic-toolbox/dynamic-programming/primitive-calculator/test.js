const assert = require('assert').strict;
const min = require('./index');

const [minOper1, path1] = min(1);
assert.equal(0, minOper1);
assert.deepEqual([1], path1);

const [minOper2, path2] = min(5);
assert.equal(3, minOper2);
assert.deepEqual([1, 3, 4, 5], path2);

const [minOper3, path3] = min(96234);
assert.equal(14, minOper3);
assert.deepEqual([1, 3, 9, 10, 11, 33, 99, 297, 891, 2673, 8019, 16038, 16039, 48117, 96234], path3);

console.info('OK!');
process.exit();
