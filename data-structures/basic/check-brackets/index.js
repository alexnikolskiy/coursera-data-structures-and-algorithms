const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    console.log(findMismatch(line));
    process.exit();
});

function areMatching(left, right) {
    return ['{}', '()', '[]'].includes(left + right);
}

function findMismatch(text) {
    const openingBracketsStack = [];

    for (let [idx, ch] of [...text].entries()) {
        if ('{(['.includes(ch)) {
            openingBracketsStack.push({ char: ch, position: idx + 1 });
        }

        if ('})]'.includes(ch)) {
            if (openingBracketsStack.length === 0 || !areMatching(openingBracketsStack.pop().char, ch)) {
                return idx + 1;
            }
        }
    }

    if (openingBracketsStack.length !== 0) {
        return openingBracketsStack.pop().position;
    }

    return 'Success';
}

module.exports = findMismatch;
