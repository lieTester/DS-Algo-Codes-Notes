/**
 * Function to calculate maximum profit using memoization (top-down approach)
 * @param {number} k - Maximum number of transactions allowed
 * @param {number[]} prices - Array of stock prices
 * @returns {number} - Maximum profit achievable
 */
var maxProfit = function (k, prices) {
   // Initialize variables
   const n = prices.length;

   // Memoization table to store computed values for subproblems
   const memo = Array(k + 1)
      .fill(null)
      .map(() =>
         Array(n + 1)
            .fill(null)
            .map(() => Array(2).fill(null))
      );

   /**
    * Depth-First Search (DFS) function to recursively find maximum profit
    * @param {number} k - Remaining transactions allowed
    * @param {number} indx - Index of the price array
    * @param {boolean} canBuy - Indicates if a stock can be bought
    * @returns {number} - Maximum profit achievable
    */
   const dfs = (k, indx, canBuy) => {
      // Base cases
      if (k === 0 || indx >= n) return 0;
      if (memo[k][indx][canBuy]) return memo[k][indx][canBuy];

      var ans = 0;
      if (canBuy) {
         ans = Math.max(
            dfs(k, indx + 1, false) - prices[indx],
            dfs(k, indx + 1, true)
         );
      } else {
         ans = Math.max(
            dfs(k - 1, indx + 1, true) + prices[indx],
            dfs(k, indx + 1, false)
         );
      }
      return (memo[k][indx][canBuy] = ans); // Memoization of calculated result
   };

   return dfs(k, 0, true); // Initial DFS call
};

// Time Complexity: O(k * n)
// Space Complexity: O(k * n)

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
var maxProfit = function (k, prices) {
   const n = prices.length;

   // Base case checks
   if (n <= 1 || k === 0) {
      return 0;
   }

   // Initialize dynamic programming table
   const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));

   // Nested loops for transactions and days
   for (let transaction = 1; transaction <= k; transaction++) {
      let maxMoneyAfterBuying = -prices[0];

      for (let day = 1; day < n; day++) {
         let profitIfSellToday = prices[day] + maxMoneyAfterBuying;
         let profitIfDoNothingToday = dp[transaction][day - 1];
         dp[transaction][day] = Math.max(
            profitIfDoNothingToday,
            profitIfSellToday
         );

         let potentialProfitFromPreviousTransactionMinusCurrentPrice =
            dp[transaction - 1][day] - prices[day];
         maxMoneyAfterBuying = Math.max(
            maxMoneyAfterBuying,
            potentialProfitFromPreviousTransactionMinusCurrentPrice
         );

         // Updating maxMoneyAfterBuying by choosing the maximum value
         maxMoneyAfterBuying = Math.max(
            maxMoneyAfterBuying,
            potentialProfitFromPreviousTransactionMinusCurrentPrice
         );
      }
   }

   return dp[k][n - 1]; // Return the maximum profit
};

// Time Complexity: O(k * n)
// Space Complexity: O(k * n)
