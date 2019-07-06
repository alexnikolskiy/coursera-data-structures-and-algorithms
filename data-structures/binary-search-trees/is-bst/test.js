const assert = require('assert').strict;
const { Tree, isBinarySearchTree } = require('./index');

let tree;
tree = new Tree();

tree.insert(2, 1, 2);
tree.insert(1, -1, -1);
tree.insert(3, -1, -1);

assert.equal('CORRECT', isBinarySearchTree(tree));

tree = new Tree();
tree.insert(1, 1, 2);
tree.insert(2, -1, -1);
tree.insert(3, -1, -1);

assert.equal('INCORRECT', isBinarySearchTree(tree));

console.info('OK!');
process.exit();
