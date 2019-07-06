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

tree = new Tree();
tree.insert(2, 1, 2);
tree.insert(1, -1, -1);
tree.insert(2, -1, -1);
assert.equal('CORRECT', isBinarySearchTree(tree));

tree = new Tree();
tree.insert(2, 1, 2);
tree.insert(2, -1, -1);
tree.insert(3, -1, -1);
assert.equal('INCORRECT', isBinarySearchTree(tree));

tree = new Tree();
tree.insert(4, 1, 2);
tree.insert(2, 3, 4);
tree.insert(6, 5, 6);
tree.insert(1, -1, -1);
tree.insert(3, -1, -1);
tree.insert(4, -1, -1);
tree.insert(7, -1, -1);
assert.equal('CORRECT', isBinarySearchTree(tree));

tree = new Tree();
tree.insert(2147483647, -1, -1);
assert.equal('CORRECT', isBinarySearchTree(tree));

tree = new Tree();
tree.insert(1, -1, 1);
tree.insert(2, -1, 2);
tree.insert(3, -1, 3);
tree.insert(4, -1, 4);
tree.insert(5, -1, 5);
assert.equal('CORRECT', isBinarySearchTree(tree));

tree = new Tree();
tree.insert(10, -1, 1);
tree.insert(20, 2, 3);
tree.insert(15, 4, 5);
tree.insert(30, 6, -1);
tree.insert(12, 7, -1);
tree.insert(19, -1, -1);
tree.insert(20, -1, -1);
tree.insert(10, -1, -1);
assert.equal('CORRECT', isBinarySearchTree(tree));

tree = new Tree();
tree.insert(2, 1, 2);
tree.insert(1, -1, -1);
tree.insert(2, -1, 3);
tree.insert(2, -1, 4);
tree.insert(2, -1, 5);
tree.insert(2, -1, 6);
tree.insert(2, -1, -1);
assert.equal('CORRECT', isBinarySearchTree(tree));

tree = new Tree();
tree.insert(4, 1, 2);
tree.insert(2, -1, -1);
tree.insert(6, 3, -1);
tree.insert(6, -1, -1);
assert.equal('INCORRECT', isBinarySearchTree(tree));

console.info('OK!');
process.exit();
