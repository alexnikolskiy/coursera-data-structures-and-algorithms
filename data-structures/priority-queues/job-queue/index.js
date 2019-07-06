const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [threadCount] = line.toString().split(' ').map(Number)[0];

    rl.once('line', line => {
        const jobs = line.toString().split(' ').map(Number);
        const result = assignJobs(jobs, threadCount);

        for (let res of result) {
            console.log(res.join(' '));
        }

        process.exit();
    });
});

function assignJobs(jobs = [], threadCount = 0) {
    const result = [];
    const nextFreeTime = new Heap(Array.from({ length: threadCount }, (v, k) => new Element(k, 0)));

    for (let job of jobs) {
        const { element: nextWorker, priority: time } = nextFreeTime.getMin();

        result.push([nextWorker, time]);
        nextFreeTime.changePriority(0, time + job);
    }

    return result;
}

class Element {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class Heap {
    constructor(items) {
        this.items = items;
        this.size = items.length - 1;
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
        if (l <= this.size && this.items[minIndex].priority >= this.items[l].priority) {
            if (this.items[minIndex].priority === this.items[l].priority) {
                minIndex = this.items[minIndex].element < this.items[l].element ? minIndex : l;
            } else {
                minIndex = l;
            }
        }

        const r = this.rightChild(i);
        if (r <= this.size && this.items[minIndex].priority >= this.items[r].priority) {
            if (this.items[minIndex].priority === this.items[r].priority) {
                minIndex = this.items[minIndex].element < this.items[r].element ? minIndex : r;
            } else {
                minIndex = r;
            }
        }

        if (i !== minIndex) {
            this.swap(i, minIndex);
            this.siftDown(minIndex);
        }
    }

    changePriority(i, p) {
        this.items[i].priority = p;
        this.siftDown(i);
    }

    getMin() {
        return this.items[0];
    }
}

module.exports = assignJobs;
