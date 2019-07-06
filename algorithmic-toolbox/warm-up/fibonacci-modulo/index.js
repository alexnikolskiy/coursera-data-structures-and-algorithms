const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(getFibMod(n, m));
        process.exit();
    }
}

function getPisanoPeriod(n) {
    const arr = [];
    let remainder;

    arr[0] = 0;
    arr[1] = 1;

    for (let i = 0; i < n * n; i++) {
        remainder = (arr[i] + arr[i + 1]) % n;

        if (remainder === 1 && arr[i + 1] === 0) {
            return i + 1;
        }

        arr.push(remainder);
    }
}

function getFibMod(n, m) {
    let remainder = n % getPisanoPeriod(m);
    let first = 0;
    let second = 1;
    let res = remainder;

    for (let i = 1; i < remainder; i++) {
        res = (first + second) % m;
        first = second;
        second = res;
    }

    return res % m;
}

module.exports = getFibMod;
