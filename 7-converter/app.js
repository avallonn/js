// Совершенно не понял как сделать это, пытался прогуглить, но там уже более сложные примеры и варианты решения подобной задачи. Направьте, пожалуйста, какое решение применить?

function summ (amount, sourceCurrency, targetCurrencyUSD, targetCurrencyEUR ) {
    let USD = 90;
    let RUB = 1;
    let EUR = 96;
    let targetUSD = USD > RUB;
    let targetEUR = EUR > RUB;

    switch(true) {
        case targetUSD:
            return (amount / USD) + targetCurrencyUSD;

        case targetEUR:
            return (amount / EUR) + targetCurrencyEUR;

        default:
            return null || 0;
    }
};

console.log(summ(1000, ` руб.`, `$`, `€`));