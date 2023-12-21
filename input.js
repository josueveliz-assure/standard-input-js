const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputN = async () => {
    let data = [];
    for await (const line of rl) {
        if(line === '0') {
            rl.close();
            break;
        }
        data.push(parseInt(line));
    }
    return data;
}

const inputNM = async () => {
    let data = [];
    for await (const line of rl) {
        let [a, b] = line.split(' ').map((elem) => parseInt(elem));
        if(a === 0 && b === 0) {
            rl.close();
            break;
        }
        data.push([a, b]);
    }
    return data;
}

module.exports = { inputN, inputNM };
