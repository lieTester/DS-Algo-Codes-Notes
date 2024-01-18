/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
   const n = nums.length;
   const dp = Array(n + 1)
      .fill(-1)
      .map(() => Array(n + 1).fill(-1));

   // Helper function to perform the recursive burst operation
   const dfs = (i, j) => {
      if (i > j) return 0; // Base case: no balloons to burst
      if (i === j) {
         // Only one balloon left, return its value considering neighbors
         let tmp = nums[i];
         if (i - 1 >= 0) tmp *= nums[i - 1];
         if (i + 1 < n) tmp *= nums[i + 1];
         return tmp;
      }

      if (dp[i][j] !== -1) return dp[i][j]; // If result is already computed, return it

      let ans = 0;
      // Burst each balloon from i to j and find the maximum result
      for (let k = i; k <= j; ++k) {
         let tmp = nums[k];
         if (i - 1 >= 0) tmp *= nums[i - 1];
         if (j + 1 < n) tmp *= nums[j + 1];

         // Recursively calculate the result for the remaining balloons on the left and right
         ans = Math.max(ans, tmp + dfs(i, k - 1) + dfs(k + 1, j));
      }

      dp[i][j] = ans; // Memoize the result
      return ans;
   };

   return dfs(0, n - 1); // Start the recursive process from the first to the last balloon
};

// Time complexity: O(n^3), where n is the number of balloons.
//   The function explores all possible combinations of balloons, and each combination takes O(n) time.
// Space complexity: O(n^2), for the memoization table dp.
//   The function uses a 2D array to store intermediate results, taking up O(n^2) space.

// Explanation:
// The function uses a recursive approach with memoization to find the maximum coins obtained by bursting balloons.
// It explores all possible combinations by recursively bursting balloons and calculates the maximum result.
// The memoization table (dp) is used to store and retrieve already computed results, avoiding redundant computations.

// Alternative approaches:
// Dynamic programming with bottom-up (iterative) approach can be used to avoid the recursion and further optimize the solution.
// There's also an optimized dynamic programming solution with the "DP table compression" technique to reduce space complexity.
