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

function change(money) {
    const coins = [1, 3, 4];
    const minNumCoins = [];
    let numCoins = 0;

    minNumCoins[0] = 0;

    for (let m = 1; m <= money; m++) {
        minNumCoins[m] = Number.POSITIVE_INFINITY;

        for (let coin of coins) {
            if (m >= coin) {
                numCoins = minNumCoins[m - coin] + 1;
                if (numCoins < minNumCoins[m]) {
                    minNumCoins[m] = numCoins;
                }
            }
        }
    }

    return minNumCoins[money];
}

module.exports = change;
