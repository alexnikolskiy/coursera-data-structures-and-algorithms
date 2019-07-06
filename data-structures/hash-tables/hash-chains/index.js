const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const bucketCount = Number(line);

    rl.once('line', line => {
        const n = Number(line);
        const queries = [];
        let count = 0;

        rl.on('line', line => {
            queries.push(line.toString());

            if (++count >= n) {
                const result = processQueries(bucketCount, queries);

                for (let res of result) {
                    console.log(res);
                }

                process.exit();
            }
        });
    });
});

class HashTable {
    constructor(bucketCount, multiplier, prime) {
        this.bucketCount = bucketCount;
        this.multiplier = multiplier;
        this.prime = prime;
        this.elems = Array.from({ length: this.bucketCount }, () => new LinkedList());
    }

    hashFunc(str = '') {
        let res = 0;
        let len = str.length;

        for (let i = len; i--;) {
            res = (res * this.multiplier + str[i].charCodeAt(0)) % this.prime;
        }

        return res % this.bucketCount;
    }

    add(str) {
        if (this.find(str) === 'no') {
            const list = this.elems[this.hashFunc(str)];

            list.push(str);
        }
    }

    del(str) {
        if (this.find(str) === 'yes') {
            const list = this.elems[this.hashFunc(str)];

            list.delete(str);
        }
    }

    find(str) {
        const list = this.elems[this.hashFunc(str)];

        for (let elem of list) {
            if (elem === str) {
                return 'yes';
            }
        }

        return 'no';
    }

    check(i) {
        const list = this.elems[+i];
        const res = [];

        for (let elem of list) {
            res.push(elem);
        }

        return res.join(' ');
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);

        node.next = this.head;
        this.head = node;
        this.length += 1;
    }

    delete(value) {
        if (this.isEmpty()) {
            return null;
        }

        let nodeToRemove = this.head;

        if (nodeToRemove.value === value) {
            this.head = this.head.next;
            nodeToRemove.next = null;
            this.length -= 1;

            return nodeToRemove;
        }

        let current = this.head.next;
        let previous = this.head;

        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }

        if (current === null) {
            return null;
        }

        nodeToRemove = current;
        previous.next = nodeToRemove.next;
        current.next = null;
        this.length -= 1;

        return nodeToRemove;
    }

    isEmpty() {
        return this.length === 0;
    }

    [Symbol.iterator]() {
        let current = this.head;

        return {
            next() {
                if (current === null) {
                    return { done: true };
                }

                const value = current.value;

                current = current.next;

                return { value, done: false };
            }
        };
    }
}

function processQueries(bucketCount, queries = []) {
    const hashTable = new HashTable(bucketCount, 263, 1000000007);
    const result = [];

    for (let query of queries) {
        const [type, arg] = query.split(' ');
        const res = hashTable[type](arg);

        if (typeof res !== 'undefined') {
            result.push(res);
        }
    }

    return result;
}

module.exports = processQueries;
