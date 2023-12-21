const { inputNM } = require('./input');

const generateNBonnaci = async () => {
    const data = await inputNM();
    data.forEach((elem) => {
        const result = generateTerm(elem[0], elem[1]);
        console.log(result);
    });
};

const generateTerm = (n, b) => {
    let arr = [...Array(n)].map(() => 0);
    arr[n - 1] = 1;
    Array(b).fill().forEach(() => {
        arr.push(sumOfTerms(arr, n));
    });
    return arr[b - 1];
};

const sumOfTerms = (arr, k) => {
    const lastKTerms = arr.slice(-k);
    return lastKTerms.reduce((a, b) => a + b, 0);
};

generateNBonnaci();