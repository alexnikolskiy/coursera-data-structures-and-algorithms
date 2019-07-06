const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(change(parseInt(line, 10)));
    process.exit();
}

function change(m) {
    let count = 0;
    const coins = [10, 5, 1];

    while (m !== 0) {
        for (let coin of coins) {
            if (Math.floor(m / coin) !== 0) {
                m -= coin;
                count++;
                break;
            }
        }
    }

    return count;
}

module.exports = change;
