/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
   // Dynamic programming array to store the counts of combinations
   var dp = new Array(target + 1).fill(0);
   dp[0] = 1; // Base case: There's one way to make 0 with no numbers

   // Loop through all possible targets up to the given target
   for (var i = 1; i <= target; i++) {
      // For each target, iterate through the nums array
      for (var num of nums) {
         // If the current number is less than or equal to the current target,
         // add the count of combinations at (current target - current number)
         if (i - num >= 0) {
            dp[i] += dp[i - num];
         }
      }
   }

   return dp[target]; // The final count of combinations for the target
};

// Time complexity: O(target * nums.length)
// Space complexity: O(target)
// Explanation:
// The code uses a bottom-up dynamic programming approach (tabulation) to compute the count of combinations.
// The outer loop runs 'target' times, and the inner loop runs 'nums.length' times for each target value.
// The 'dp' array of size 'target + 1' stores counts of combinations for each target value.
// The final result is stored at dp[target].

var combinationSum4 = function (nums, target) {
   // Memoization object to store computed values
   var memo = {};

   var dfs = (target) => {
      if (target === 0) {
         return 1; // Base case: There's one way to make 0 with no numbers
      }
      if (target < 0) {
         return 0;
      }

      // Check if the result for the current target is already computed
      if (memo[target] !== undefined) {
         return memo[target];
      }

      var count = 0;

      // Calculate the count of combinations for the current target
      for (var num of nums) {
         count += dfs(target - num);
      }

      // Memoize the result for the current target
      memo[target] = count;

      return count;
   };

   return dfs(target); // The final count of combinations for the target
};

// Time complexity: O(target * nums.length)
// Space complexity: O(target) for memoization
// Explanation:
// The code uses a top-down dynamic programming approach (memoization) to compute the count of combinations.
// The 'dfs' function recursively calculates the count of combinations for each target value.
// Memoization using the 'memo' object helps avoid redundant computations by storing previously computed values.
// The final count of combinations for the given 'target' is returned.
