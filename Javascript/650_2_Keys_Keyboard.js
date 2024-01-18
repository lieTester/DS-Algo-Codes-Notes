/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
   // Base case: if n is already 1, no steps needed
   if (n === 1) return 0;

   // Initialize dp array for dynamic programming
   var dp = Array(n + 1)
      .fill(-1)
      .map(() => Array(n + 1).fill(-1));

   // Recursive function to find minimum steps
   const dfs = (count, counter) => {
      // Base case: if count reaches n, return 0 steps
      if (count === n) return 0;

      // Base case: if count exceeds n, return a large number to indicate infinity
      if (count > n) return Infinity;

      // Check if the result is already calculated
      if (dp[count][counter] !== -1) {
         return dp[count][counter];
      }

      // Recursive calls for copy and paste options
      const copyOption = dfs(2 * count, count) + 2;
      const pasteOption = dfs(count + counter, counter) + 1;

      // Minimum of copy and paste options
      const result = Math.min(copyOption, pasteOption);

      // Store the result in dp array
      dp[count][counter] = result;

      return result;
   };

   // Start the recursive calls with initial parameters and add 1 for the final adjustment
   return dfs(1, 1) + 1;
};

// Time complexity: O(n^2) - The nested dp array of size n x n
// Space complexity: O(n^2) - The nested dp array of size n x n

// Alternative Approach:
// This problem can be solved using a simpler bottom-up dynamic programming (tabulation) approach.
// We can create a 1D dp array of size n and iteratively calculate the minimum steps from 1 to n.

// Here's an alternative implementation:

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
   var dp = Array(n + 1).fill(0);

   for (var i = 2; i <= n; i++) {
      dp[i] = i; // Initialize with the maximum number of steps needed

      for (var j = 2; j <= i / 2; j++) {
         if (i % j === 0) {
            dp[i] = Math.min(dp[i], dp[j] + i / j);
         }
      }
   }

   return dp[n];
};

// Time complexity: O(n^2) - Nested loop for finding divisors
// Space complexity: O(n) - The dp array of size n
