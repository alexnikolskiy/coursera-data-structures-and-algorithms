// const fs = require('fs');
// const readline = require('readline');
const assert = require('assert').strict;
const Tree = require('./index');

let tree = new Tree();

tree.insert(4, 1, 2);
tree.insert(2, 3, 4);
tree.insert(5, -1, -1);
tree.insert(1, -1, -1);
tree.insert(3, -1, -1);

assert.deepEqual([1, 2, 3, 4, 5], tree.inOrderTraversal());
assert.deepEqual([4, 2, 1, 3, 5], tree.preOrderTraversal());
assert.deepEqual([1, 3, 2, 5, 4], tree.postOrderTraversal());

tree = new Tree();
tree.insert(0, 7, 2);
tree.insert(10, -1, -1);
tree.insert(20, -1, 6);
tree.insert(30, 8, 9);
tree.insert(40, 3, -1);
tree.insert(50, -1, -1);
tree.insert(60, 1, -1);
tree.insert(70, 5, 4);
tree.insert(80, -1, -1);
tree.insert(90, -1, -1);

assert.deepEqual([50, 70, 80, 30, 90, 40, 0, 20, 10, 60], tree.inOrderTraversal());
assert.deepEqual([0, 70, 50, 40, 30, 80, 90, 20, 60, 10], tree.preOrderTraversal());
assert.deepEqual([50, 80, 90, 30, 40, 70, 10, 60, 20, 0], tree.postOrderTraversal());

console.info('OK!');
process.exit();
/*
const rl = readline.createInterface({
    input: fs.createReadStream('./21'),
    terminal: false
});

rl.once('line', line => {
    const n = Number(line);
    let count = 0;

    rl.on('line', line => {
        const [key, left, right] = line.toString().split(' ').map(Number);
        tree.insert(key, left, right);

        if (++count >= n) {
            rl.close();
        }
    });

});

rl.on('close', () => {
    const rl2 = readline.createInterface({
        input: fs.createReadStream('./21.a'),
        terminal: false
    });

    rl2.once('line', line => {
        const a1 = line.toString().split(' ').map(Number);

        assert.deepEqual(a1, tree.inOrderTraversal());

        rl2.once('line', line => {
            const a2 = line.toString().split(' ').map(Number);

            assert.deepEqual(a2, tree.preOrderTraversal());

            rl2.once('line', line => {
                const a3 = line.toString().split(' ').map(Number);

                assert.deepEqual(a3, tree.postOrderTraversal());

                console.info('OK!');
                process.exit();
            });
        });

    });
});
 */
