const assert = require('assert').strict;
const processQueries = require('./index');

let queries = [
    'add world',
    'add HellO',
    'check 4',
    'find World',
    'find world',
    'del world',
    'check 4',
    'del HellO',
    'add luck',
    'add GooD',
    'check 2',
    'del good',
];
let result = [
    'HellO world',
    'no',
    'yes',
    'HellO',
    'GooD luck',
];
assert.deepEqual(result, processQueries(5, queries));

queries = [
    'add test',
    'add test',
    'find test',
    'del test',
    'find test',
    'find Test',
    'add Test',
    'find Test',
];
result = [
    'yes',
    'no',
    'no',
    'yes',
];
assert.deepEqual(result, processQueries(4, queries));

queries = [
    'check 0',
    'find help',
    'add help',
    'add del',
    'add add',
    'find add',
    'find del',
    'del del',
    'find del',
    'check 0',
    'check 1',
    'check 2',
];
result = [
    '',
    'no',
    'yes',
    'yes',
    'no',
    '',
    'add help',
    '',
];
assert.deepEqual(result, processQueries(3, queries));

console.info('OK!');
process.exit();
