const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const string1 = line.toString().trim();

    rl.once('line', line => {
        const string2 = line.toString().trim();

        console.log(editDistance(string1, string2));
        process.exit();
    });
});

function editDistance(str1, str2) {
    const n = str1.length;
    const m = str2.length;
    const matrix = Array.from({ length: n + 1 }, () => new Array(m + 1));

    for (let i = 0; i <= n; i++) {
        matrix[i][0] = i;
    }

    for (let j = 0; j <= m; j++) {
        matrix[0][j] = j;
    }

    for (let j = 1; j <= m; j++) {
        for (let i = 1; i <= n; i++) {
            const insertion = matrix[i][j - 1] + 1;
            const deletion = matrix[i - 1][j] + 1;
            const match = matrix[i - 1][j - 1];
            const mismatch = matrix[i - 1][j - 1] + 1;

            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = Math.min(insertion, deletion, match);
            } else {
                matrix[i][j] = Math.min(insertion, deletion, mismatch);
            }
        }
    }

    return matrix[n][m];
}

module.exports = editDistance;
