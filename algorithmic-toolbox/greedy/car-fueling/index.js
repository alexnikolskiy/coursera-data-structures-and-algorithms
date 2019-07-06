const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

const lines = [];
let count = 0;
rl.on('line', line => {
    lines.push(line);
    count++;

    if (count >= 4) {
        const stops = [];
        let [distance, capacity, stopCount, stopsString] = lines;

        stops.push(0);
        stops.push(...stopsString.toString().split(' ').map(Number));
        stops.push(Number(distance));

        console.log(min(capacity, stopCount, stops));
        process.exit();
    }

});

function min(m, n, s) {
    let numRefills = 0;
    let currentRefill = 0;

    while (currentRefill <= n) {
        let lastRefill = currentRefill;

        while (currentRefill <= n && (s[currentRefill + 1] - s[lastRefill] <= m)) {
            currentRefill++;
        }

        if (currentRefill === lastRefill) {
            return - 1;
        }

        if (currentRefill <= n) {
            numRefills++;
        }
    }

    return numRefills;
}

module.exports = min;
