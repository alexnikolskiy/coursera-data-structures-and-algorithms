const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    const [minOper, res] = min(parseInt(line, 10));

    console.log(minOper);
    console.log(res.join(' '));
    process.exit();
}

function min(number) {
    const minOper = [];

    minOper[0] = minOper[1] = 0;

    for (let n = 2; n <= number; n++) {
        minOper[n] = minOper[n - 1] + 1;

        if (n % 2 === 0) {
            if (minOper[n / 2] + 1 <= minOper[n]) {
                minOper[n] = minOper[n / 2] + 1;
            }
        }

        if (n % 3 === 0) {
            if (minOper[n / 3] + 1 <= minOper[n]) {
                minOper[n] = minOper[n / 3] + 1;
            }
        }
    }

    return [minOper[number], sequence(number, minOper)];
}

function sequence(n, minOper = []) {
    const res = [];

    res.push(n);

    while (n > 1) {
        const val1 = minOper[n - 1];
        const val2 = n % 2 === 0 ? minOper[n / 2] : Number.POSITIVE_INFINITY;
        const val3 = n % 3 === 0 ? minOper[n / 3] : Number.POSITIVE_INFINITY;
        const val = Math.min(val1, val2, val3);

        switch (val) {
            case val1:
                res.push(n - 1);
                n--;
                break;
            case val2:
                res.push(n / 2);
                n /= 2;
                break;
            case val3:
                res.push(n / 3);
                n /= 3;
                break;
        }
    }

    return res.reverse();
}

module.exports = min;
