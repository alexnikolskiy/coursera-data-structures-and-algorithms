const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const capacity = line.toString().split(' ').map(Number)[0];

    rl.once('line', line => {
        const weights = line.toString().split(' ').map(Number);

        console.log(optimalWeight(capacity, weights));
        process.exit();
    });
});

function optimalWeight(capacity, weights) {
    const matrix = Array.from({ length: weights.length + 1 }, () => new Array(capacity + 1));

    for (let i = 0; i <= weights.length; i++) {
        matrix[i][0] = 0;
    }

    for (let j = 0; j <= capacity; j++) {
        matrix[0][j] = 0;
    }

    for (let i = 1; i <= weights.length; i++) {
        for (let w = 1; w <= capacity; w++) {
            const currentWeight = weights[i - 1];
            matrix[i][w] = matrix[i - 1][w];

            if (currentWeight <= w) {
                const weight = matrix[i - 1][w - currentWeight] + currentWeight;

                if (weight > matrix[i][w]) {
                    matrix[i][w] = weight;
                }
            }
        }
    }

    return matrix[weights.length][capacity];
}

module.exports = optimalWeight;
