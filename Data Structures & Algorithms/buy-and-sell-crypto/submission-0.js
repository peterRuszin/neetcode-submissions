class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowest = prices[0];
        let bestProfit = 0;

        for(let i = 1; i<prices.length; i++) {
            if(prices[i] < lowest) lowest = prices[i]
            if((prices[i] - lowest) > bestProfit) bestProfit = prices[i] - lowest
        }
        return bestProfit
    }
}
