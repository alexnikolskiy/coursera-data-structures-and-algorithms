const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, values, weights) {
    const unitValues = [];
    let total = 0;

    for (let i = 0; i < count; i++) {
        unitValues.push((values[i] / weights[i]));
    }

    while (capacity !== 0) {
        let maxPos = 0;

        for (let i = 1; i < count; i++) {
            if (weights[i] !== 0 && weights[maxPos] !== 0 && unitValues[i] > unitValues[maxPos]) {
                maxPos = i;
            }
        }

        const weight = Math.min(capacity, weights[maxPos]);

        if (weight === 0) {
            break;
        }

        capacity -= weight;
        weights[maxPos] -= weight;
        total += unitValues[maxPos] * weight;
    }

    return parseFloat(total.toFixed(4));
}

module.exports = max;
