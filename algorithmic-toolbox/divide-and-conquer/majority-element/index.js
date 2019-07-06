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

function getFrequency(arr, low, high, elem) {
    let count = 0;

    for (let i = low; i <= high; i++) {
        if (arr[i] === elem) {
            count += 1;
        }
    }

    return count;
}

function getMajorityElement(arr = [], low = 0, high = arr.length - 1) {
    if (high === low) { return arr[low]; }

    const mid = low + Math.floor((high - low) / 2);
    const elemLow = getMajorityElement(arr, low, mid);
    const elemHigh = getMajorityElement(arr, mid + 1, high);

    if (elemLow === elemHigh) {
        return elemLow;
    }

    const lowCount = getFrequency(arr, low, high, elemLow);
    const highCount = getFrequency(arr, low, high, elemHigh);
    const majority = Math.ceil((high - low) / 2);

    if (lowCount > majority) {
        return elemLow;
    } else if (highCount > majority) {
        return elemHigh;
    } else {
        return -1;
    }
}

function hasMajority(arr = []) {
    const elem = getMajorityElement(arr, 0, arr.length - 1);

    return elem === -1 ? 0 : 1;
}

function hasMajorityFastest(arr = []) {
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
