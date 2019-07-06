const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', () => {
    rl.once('line', line => {
        const values = line.toString().split(' ').map(Number);

        console.log(partition(values, 3));
        process.exit();
    });
});

function subset(values, capacity) {
    const matrix = Array.from({ length: values.length + 1 }, () => new Array(capacity + 1));
    let maxRow = 0;

    for (let i = 0; i <= values.length; i++) {
        matrix[i][0] = 0;
    }

    for (let j = 0; j <= capacity; j++) {
        matrix[0][j] = 0;
    }

    for (let i = 1; i <= values.length; i++) {
        let maxValue = 0;

        for (let v = 1; v <= capacity; v++) {
            const currentValue = values[i - 1];
            matrix[i][v] = matrix[i - 1][v];

            if (currentValue <= v) {
                const value = matrix[i - 1][v - currentValue] + currentValue;

                if (value > matrix[i][v]) {
                    matrix[i][v] = value;
                    maxValue = value;
                }
            }
        }

        if (maxValue === capacity) {
            maxRow = i;
            break;
        }
    }

    const subValues = [];
    let curColumn = capacity;

    while (maxRow > 0) {
        const curValue = values[maxRow - 1];
        if (matrix[maxRow][curColumn] === matrix[maxRow - 1][curColumn - curValue] + curValue) {
            subValues.push(curValue);
            curColumn = curColumn - curValue;
        }

        maxRow -= 1;
    }

    return subValues;
}

function partition(values, parts) {
    if (values.length < parts) {
        return 0;
    }

    const sum = values.reduce((acc, cur) => acc + cur);
    if (sum % parts !==0) {
        return 0;
    }

    const capacity = sum / parts;
    const bigValues = values.filter(v => v > capacity);
    if (bigValues.length) {
        return 0;
    }

    values.sort((a, b) => b - a);

    for (let k = 0; k < parts; k++) {
        const subValues = subset(values, capacity);

        for (let subValue of subValues) {
            values.splice(values.indexOf(subValue), 1);
        }
    }

    if (values.length) {
        return 0;
    }

    return 1;
}

module.exports = partition;
