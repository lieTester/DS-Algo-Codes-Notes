/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
   // Calculate the total sum of the numbers in the array
   var target = nums.reduce((total, num) => total + num, 0);

   // If the total sum is odd, it can't be divided into two equal subsets
   if (target % 2 !== 0) {
      return false;
   }

   // Target for each subset is half of the total sum
   target /= 2;

   // Memoization object to store computed results
   const memo = {};

   // Depth-first search function to check subset partitioning
   const dfs = (indx, target) => {
      // Base cases:
      // If the target is reached (subset sum is 0), return true
      if (target === 0) {
         return true;
      }
      // If index exceeds the array length or target becomes negative, return false
      if (indx >= nums.length || target < 0) {
         return false;
      }

      // If the result is already computed, return it from memoization
      if (memo[indx] && memo[indx][target] !== undefined) {
         return memo[indx][target];
      }

      // If memoization doesn't exist for the current index, create it
      if (!memo[indx]) {
         memo[indx] = {};
      }

      // Explore two possibilities: include or exclude the current number in the subset
      return (memo[indx][target] =
         dfs(indx + 1, target) || dfs(indx + 1, target - nums[indx]));
   };

   // Initiate DFS from index 0 with the target sum for subsets
   return dfs(0, target);
};

/*
Explanation:
The code uses a depth-first search (DFS) approach with memoization to determine if the array
can be partitioned into two subsets with equal sums.

Time complexity: O(nums.length * target)
Space complexity: O(nums.length * target) for memoization object

Alternative approach:
Another approach to solve this problem is using dynamic programming (tabulation) to create a 2D array
where dp[i][j] represents whether a subset of nums[0...i] can have a sum equal to j. This approach has
a time complexity of O(nums.length * target) and space complexity of O(nums.length * target).
*/

var canPartition = function (nums) {
   const totalSum = nums.reduce((total, num) => total + num, 0);

   // If the total sum is odd, it can't be divided into two equal subsets
   if (totalSum % 2 !== 0) {
      return false;
   }

   const target = totalSum / 2;
   const dp = new Array(nums.length + 1)
      .fill(false)
      .map(() => new Array(target + 1).fill(false));

   // Base case: If target is 0, any subset can form it with an empty set
   for (let i = 0; i <= nums.length; i++) {
      dp[i][0] = true;
   }

   // Fill the DP table to check if a subset with sum `target` can be formed
   for (let i = 1; i <= nums.length; i++) {
      for (let j = 1; j <= target; j++) {
         if (j >= nums[i - 1]) {
            dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
         } else {
            dp[i][j] = dp[i - 1][j];
         }
      }
   }

   return dp[nums.length][target];
};

/*
Explanation for tabulation approach:
This implementation uses bottom-up dynamic programming (tabulation) to solve the problem.
The DP array `dp[i][j]` represents whether a subset of nums[0...i-1] can have a sum equal to j.
The base case initializes the table where `dp[i][0]` is always true as an empty set can form a sum of 0.
Then, it fills the DP table iteratively for each number in nums and each possible target sum.
It checks if a subset with the current number can be formed by considering two cases:
    1. Without including the current number: dp[i - 1][j]
    2. Including the current number: dp[i - 1][j - nums[i - 1]]
Finally, it returns the value in dp[nums.length][target], indicating whether a subset with sum `target` exists.
*/
