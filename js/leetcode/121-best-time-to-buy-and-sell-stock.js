/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let profit = 0;
    let minPrice = prices[0];

    for(let i=1; i < prices.length; i++) {

        if(minPrice > prices[i]) {
            minPrice = prices[i];
            continue;
        }

        if( profit < prices[i] - minPrice) {
            profit = prices[i] - minPrice;
        }
    }

    console.log('profit', profit);
    return profit;

};

maxProfit([2,4,1]);
maxProfit([7,1,5,3,6,4]);