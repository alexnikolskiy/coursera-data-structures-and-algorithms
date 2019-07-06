const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', () => {
    rl.once('line', line => {
        const parents = line.toString().split(' ').map(Number);

        console.log(computeHeight(parents));
        process.exit();
    });
});

class Node {
    constructor(key) {
        this.key = key;
        this.children = [];
        this.parent = null;
    }
}

function computeHeight(parents) {
    const nodes = parents.map((parent, idx) => new Node(idx));
    const root = nodes[parents.indexOf(-1)];
    const stack = [];

    nodes.forEach((node, idx) => {
        const parentIndex = parents[idx];
        const parent = parentIndex >= 0 ? nodes[parentIndex] : null;

        if (parent) {
            node.parent = parent;
            parent.children.push(node);
        }
    });

    let height = new Map();
    let res = 1;

    height.set(root, 1);
    stack.push(...root.children);

    while (stack.length) {
        const node = stack.pop();
        let h = height.get(node.parent);

        if (node.children.length) {
            height.set(node, ++h);
        }

        res = Math.max(res, h);
        stack.push(...node.children);
    }

    return res + 1;
}

module.exports = computeHeight;
