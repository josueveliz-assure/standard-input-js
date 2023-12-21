const { inputN } = require('./input');

const moneyCuts = [1, 2, 5, 10, 20, 50, 100, 200, 500];

const combine = (price) => {
    let cuts = [];
    const comb = (target, curr = [], sum = 0, index = 0) => {
        if(sum === target) {
            cuts.push([...curr]);
        }else if(sum < target){
            for(let i = index; i<moneyCuts.length; i++) {
                curr.push(moneyCuts[i]);
                comb(target, curr, sum + moneyCuts[i], i);
                curr.pop();
            }
        }
    }
    comb(price);
    return cuts;
}

const exhaustiveCombine = (price) => {
    let cuts = [];
    const exhaustiveComb = (target, curr = [], sum = 0) => {
        if(sum === target) {
            cuts.push([...curr]);
        }else{
            moneyCuts.forEach((elem) => {
                if(sum + elem <= target) {
                    exhaustiveComb(target, [...curr, elem], sum + elem);
                }
            });
        }
    };
    exhaustiveComb(price);
    return cuts;
}

const formsOfChange = (k) => {
    let dp = [...Array(k + 1)].map(() => 0);
    dp[0] = 1;
    moneyCuts.forEach((amount) => {
        for(let current = amount; current <= k; current++){
            dp[current] += dp[current - amount];
        }
    });
    return dp[k];
}


const main = async () => {
    const data = await inputN();
    data.forEach((elem) => {
        console.log(formsOfChange(elem));
        console.log("###########");
        console.log(combine(elem));
        console.log("###########");
        console.log(exhaustiveCombine(elem));
    });
};

main();