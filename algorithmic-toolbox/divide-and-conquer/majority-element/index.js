const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', () => {
    rl.once('line', line => {
        const arr = line.toString().split(' ');

        console.log(hasMajority(arr));
        process.exit();
    });
});

function hasMajority(arr = []) {
    const res = {};
    const majority = Math.floor(arr.length / 2);

    for (let i = 0; i < arr.length; i++) {
        if (!res[arr[i]]) {
            res[arr[i]] = 0;
        }
        res[arr[i]] += 1;
    }

    for (let key of Object.keys(res)) {
        if (res[key] > majority) {
            return 1;
        }
    }

    return 0;
}

module.exports = hasMajority;
