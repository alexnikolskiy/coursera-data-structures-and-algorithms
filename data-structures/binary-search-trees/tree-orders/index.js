const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const n = Number(line);
    const vertices = [];
    let count = 0;

    rl.on('line', line => {
        vertices.push(line.toString().split(' ').map(Number));

        if (++count >= n) {
            const tree = new Tree();

            for (let vertex of vertices) {
                const [key, left, right] = vertex;
                tree.insert(key, left, right);
            }

            write(tree.inOrderTraversal().join(' '));
            write(tree.preOrderTraversal().join(' '));
            write(tree.postOrderTraversal().join(' '));

            process.exit();
        }
    });
});

function write(res = []) {
    const maxLength = 10000;

    for (let i = 0; i < res.length; i += maxLength) {
        process.stdout.write(res.slice(i, i + maxLength));
    }
    process.stdout.write('\n');
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

    inOrderTraversal() {
        const result = [];

        // ** recursive solution **
        /*
        const inOrder = (node) => {
            if (node === undefined) { return; }

            inOrder(this.nodes[node.left]);
            result.push(node.key);
            inOrder(this.nodes[node.right]);
        };

        inOrder(this.root);
        */

        // ** iterative solution **
        const callStack = [];
        let current = this.root;

        while (true) {
            while (!!current) {
                callStack.push(current);
                current = this.nodes[current.left];
            }

            if (callStack.length === 0) { break; }

            const lastNode = callStack.pop();
            result.push(lastNode.key);
            current = this.nodes[lastNode.right];
        }

        return result;
    }

    preOrderTraversal() {
        const result = [];

        // ** recursive solution **
        // const preOrder = (node) => {
        //     if (node === undefined) {
        //         return;
        //     }
        //
        //     result.push(node.key);
        //     preOrder(this.nodes[node.left]);
        //     preOrder(this.nodes[node.right]);
        // };
        //
        // preOrder(this.root);

        // ** iterative solution **
        const callStack = [];
        let current = this.root;

        while (true) {
            while (!!current) {
                result.push(current.key);
                callStack.push(current);
                current = this.nodes[current.left];
            }

            if (callStack.length === 0) { break; }

            const lastNode = callStack.pop();
            current = this.nodes[lastNode.right];
        }

        return result;
    }

    postOrderTraversal() {
        const result = [];

        // ** recursive solution **
        // const postOrder = (node) => {
        //     if (node === undefined) {
        //         return;
        //     }
        //
        //     postOrder(this.nodes[node.left]);
        //     postOrder(this.nodes[node.right]);
        //     result.push(node.key);
        // };

        // postOrder(this.root);

        // ** iterative solution **
        const callStack = [];
        let current = this.root;

        while (true) {
            while (!!current) {
                callStack.push(current);
                callStack.push(current);
                current = this.nodes[current.left];
            }

            if (callStack.length === 0) {
                break;
            }

            const lastNode = callStack.pop();

            if (lastNode === callStack[callStack.length - 1]) {
                current = this.nodes[lastNode.right];
            } else {
                result.push(lastNode.key);
            }
        }

        return result;
    }
}

module.exports = Tree;
