const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    const size = arr.length;

    let maxPos1 = size - 1;
    for (let i = size; i--; ) {
        if (arr[i] >= arr[maxPos1]) {
            maxPos1 = i;
        }
    }

    let maxPos2 = size - 1 === maxPos1 ? size - 2 : size - 1;
    for (let i = size; i--; ) {
        if (i !== maxPos1 && arr[i] >= arr[maxPos2]) {
            maxPos2 = i;
        }
    }

    return arr[maxPos1] * arr[maxPos2];
}

module.exports = max;
