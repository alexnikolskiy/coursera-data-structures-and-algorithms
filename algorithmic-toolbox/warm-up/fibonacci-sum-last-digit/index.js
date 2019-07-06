const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(getLastDigitOfTheSum(parseInt(line, 10)));
    process.exit();
}

function getLastDigitOfTheSum(n) {
    const size = (n + 2) % 60;
    let first = 0;
    let second = 1;
    let res = 1;

    for (let i = 1; i < size; i++) {
        res = (first % 10 + second % 10) % 10;
        first = second;
        second = res;
    }

    if (res === 0) {
        return 9;
    }

    return res % 10 - 1;
}

module.exports = getLastDigitOfTheSum;
