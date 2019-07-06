const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', () => {
    rl.once('line', line => {
        const arr = line.toString().split(' ').map(Number);
        const res = quickSort3(arr).join(' ');
        const maxLength = 50000;

        for (let i = 0; i < res.length; i += maxLength) {
            process.stdout.write(res.slice(i, i + maxLength));
        }

        process.stdout.write('\n');
        process.exit();
    });
});

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function quickSort3(arr) {
    const left = 0;
    const right = arr.length - 1;

    function sort(arr, left, right) {
        if (left >= right) {
            return;
        }

        const k = Math.floor(Math.random() * (right + 1 - left)) + left;
        swap(arr, left, k);

        let pivot = arr[left];
        let j = left;

        for (let i = left + 1; i <= right; i++) {
            if (arr[i] <= pivot) {
                j++;
                swap(arr, i, j);
            }
        }

        swap(arr, left, j);
        const m = j;
        pivot = arr[m];

        for (let i = m - 1; i > left; i--) {
            if (arr[i] === pivot) {
               j--;
               swap(arr, i, j);
            }
        }

        sort(arr, left, j - 1);
        sort(arr, j + 1, right);
    }

    sort(arr, left, right);
    return arr;
}

module.exports = quickSort3;
