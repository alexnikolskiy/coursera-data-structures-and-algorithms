const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const n = Number(line);
    const vertices = [];
    const tree = new Tree();
    let count = 0;

    if (n === 0) {
        setTimeout(() => rl.close(), 0);
    }

    rl.on('line', line => {
        vertices.push(line.toString().split(' ').map(Number));

        if (++count >= n) {
            for (let vertex of vertices) {
                const [key, left, right] = vertex;
                tree.insert(key, left, right);
            }

            rl.close();
        }
    });

    rl.on('close', () => {
        console.log(isBinarySearchTree(tree));
    })
});

function isBinarySearchTree(tree) {
    const callStack = [];
    let current = tree.root;
    let previous = null;

    while (true) {
        while (!!current) {
            callStack.push(current);
            current = tree.nodes[current.left];
        }

        if (callStack.length === 0) {
            break;
        }

        const lastNode = callStack.pop();

        if (previous && (previous.key > lastNode.key
            || (previous.key === lastNode.key && tree.nodes[lastNode.left] === previous))
        ) {
            return 'INCORRECT';
        }

        previous = lastNode;
        current = tree.nodes[lastNode.right];
    }

    return 'CORRECT';
}

class Node {
    constructor(key, left = null, right = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.nodes = [];
    }

    insert(key, left, right) {
        const node = new Node(key, left, right);

        if (this.root === null) {
            this.root = node;
        }

        this.nodes.push(node);
    }
}

module.exports = {
    isBinarySearchTree,
    Tree
};
