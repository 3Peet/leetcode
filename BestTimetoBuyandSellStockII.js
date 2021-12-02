/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let curr = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > curr) {
            console.log('profit : ' + (prices[i] - curr));
            profit += (prices[i] - curr)
            curr = prices[i]
        }
        else {
            curr = prices[i]
        }
    }
    console.log(profit);
    return profit;
};

maxProfit([1, 2, 3, 4, 5])