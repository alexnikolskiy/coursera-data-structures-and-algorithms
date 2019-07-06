const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', () => {
    rl.once('line', line => {
        const arr = line.toString().split(' ').map(Number);
        const heapBuilder = new HeapBuilder(arr);
        const swaps = heapBuilder.generateSwaps();

        console.log(swaps.length);

        for (let swap of swaps) {
            console.log(swap.join(' '));
        }

        process.exit();
    });
});

class HeapBuilder {
    constructor(items = []) {
        this.items = items;
        this.size = items.length;
        this.swaps = [];
    }

    leftChild(i) {
        return 2 * i + 1;
    }

    rightChild(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        const tmp = this.items[i];
        this.items[i] = this.items[j];
        this.items[j] = tmp;
    }

    siftDown(i) {
        let minIndex = i;

        const l = this.leftChild(i);
        if (l <= this.size && this.items[minIndex] > this.items[l]) {
            minIndex = l;
        }

        const r = this.rightChild(i);
        if (r <= this.size && this.items[minIndex] > this.items[r]) {
            minIndex = r;
        }

        if (i !== minIndex) {
            this.swap(i, minIndex);
            this.swaps.push([i, minIndex]);
            this.siftDown(minIndex);
        }
    }

    generateSwaps() {
        const len = Math.floor(this.items.length / 2) - 1;

        for (let i = len; i >= 0; i--) {
            this.siftDown(i);
        }

        return this.swaps;
    }
}

function generateSwaps(arr = []) {
    const heapBuilder = new HeapBuilder(arr);

    return heapBuilder.generateSwaps();
}

module.exports = generateSwaps;
