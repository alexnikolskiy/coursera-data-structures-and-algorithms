const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const n = Number(line);
    const queries = [];
    let count = 0;

    rl.on('line', line => {
        queries.push(line.toString());

        if (++count >= n) {
            const result = processQueries(queries);

            for (let res of result) {
                console.log(res);
            }

            process.exit();
        }
    });
});

function processQueries(queries) {
    const phoneBook = new PhoneBook(10e7);
    const result = [];

    for (let query of queries) {
        const [type, number, name] = query.split(' ');
        const res = phoneBook[type](+number, name);

        if (res) {
            result.push(res);
        }
    }

    return result;
}

class PhoneBook {
    constructor(size = 0) {
        this.contacts = new Array(size);
    }

    add(number, name) {
        this.contacts[number] = name;
    }

    del(number) {
        delete this.contacts[number];
    }

    find(number) {
        return this.contacts[number] ? this.contacts[number] : 'not found';
    }
}

module.exports = processQueries;
