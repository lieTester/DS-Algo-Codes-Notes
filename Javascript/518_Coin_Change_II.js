/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
   // Creating a 2D array to store results of subproblems
   const dp = Array(coins.length)
      .fill(-1)
      .map(() => Array(amount + 1).fill(-1));

   // DFS function to compute the count of combinations
   const dfs = (indx, target) => {
      // Base cases:
      if (target === 0) {
         return 1; // If the target is reached with exact coins, return 1 combination found
      }
      if (indx >= coins.length || target < 0) {
         return 0; // If coins exhausted or target < 0, return 0 combinations
      }
      if (dp[indx][target] !== -1) {
         return dp[indx][target]; // If result is cached, return it
      }

      // Calculate the count of combinations for current indx and target
      const ans = dfs(indx, target - coins[indx]) + dfs(indx + 1, target);

      // Store result in DP table and return
      return (dp[indx][target] = ans);
   };

   return dfs(0, amount); // Start DFS from index 0 and target amount
};

// Time complexity: O(amount * coins.length) - Each cell in DP table is computed once
// Space complexity: O(amount * coins.length) - DP table size
// Explanation:
// The code uses a recursive DFS approach with memoization (DP) to compute the count of combinations.
// It iterates through each coin denomination, tracking the count of combinations that sum up to the target amount.
// The DP table stores previously computed subproblem results to avoid redundant calculations.

// Alternative approach:
// The tabulation (bottom-up) approach can also be used to solve this problem by filling a DP table iteratively.
// In this approach, the table is filled from smaller amounts to the target amount, using the coin denominations.
// The final result is stored at dp[coins.length][amount].
// This approach also has a time complexity of O(amount * coins.length) and space complexity of O(amount * coins.length).
