const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    const arr = [];

    arr[0] = 0;
    arr[1] = 1;

    for (let i = 2; i <= n; i++) {
        arr[i] = (((arr[i - 1] % 10) + (arr[i - 2] % 10)) % 10);
    }

    return arr[n];
}

module.exports = fib;
