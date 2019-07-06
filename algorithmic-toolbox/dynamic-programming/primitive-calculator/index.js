const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    const [minOper, path] = min(parseInt(line, 10));

    console.log(minOper);
    console.log(path.join(' '));
    process.exit();
}

function min(number) {
    const minOper = [];
    const path = [];

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

    let n = number;
    path.push(number);

    while (n > 1) {
        const val1 = minOper[n - 1];
        const val2 = n % 2 === 0 ? minOper[n / 2] : Infinity;
        const val3 = n % 3 === 0 ? minOper[n / 3] : Infinity;
        const val = Math.min(val1, val2, val3);

        switch (val) {
            case val1:
                path.push(n - 1);
                n--;
                break;
            case val2:
                path.push(n / 2);
                n /= 2;
                break;
            case val3:
                path.push(n / 3);
                n /= 3;
                break;
        }
    }

    return [minOper[number], path.reverse()];
}

module.exports = min;
