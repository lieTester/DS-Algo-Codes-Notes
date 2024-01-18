/**
 * Function to find the maximum amount of money that can be robbed from houses using memoization.
 * @param {number[]} nums - Array representing the money in each house
 * @return {number} - Maximum amount of money that can be robbed
 */

/**
 * Time Complexity: O(n)
 *   - Each subproblem is solved once and memoized, leading to a linear time complexity.
 * Space Complexity: O(n)
 *   - Memoization table stores results for each subproblem, requiring O(n) space.
 */

var rob = function (nums) {
   // Memoization table to store calculated results for different subproblems
   const memo = {};

   /**
    * Recursive helper function with memoization
    * @param {number} index - Current index of the house
    * @param {boolean} isOdd - Flag indicating whether the current index is odd or even
    * @returns {number} - Maximum amount of money that can be robbed
    */
   const robHelper = (index, isOdd) => {
      if (index < 0) return 0;
      if (memo[index] && memo[index][isOdd] !== undefined) {
         return memo[index][isOdd];
      }

      let result;
      if (isOdd) {
         result = Math.max(
            robHelper(index - 1, false) + nums[index],
            robHelper(index - 1, true)
         );
      } else {
         result = Math.max(
            robHelper(index - 1, false),
            robHelper(index - 1, true)
         );
      }

      memo[index] = memo[index] || {};
      memo[index][isOdd] = result;

      return result;
   };

   // Start the recursion from the last house (index: nums.length - 1) with both odd and even states
   return Math.max(
      robHelper(nums.length - 1, false),
      robHelper(nums.length - 1, true)
   );
};

/**
 * Time Complexity: O(n)
 *   - Iterates through the array once, calculating and storing results for each subproblem.
 * Space Complexity: O(n)
 *   - Uses a 2D dynamic programming table to store results for each subproblem, requiring O(n) space.
 */

var rob = function (nums) {
   const n = nums.length;

   // Create a dynamic programming table to store calculated results
   const dp = Array.from({ length: n }, () => Array(2).fill(0));

   // Base case: Robbing the first house
   dp[0][0] = nums[0];

   // Iterate through the houses starting from the second one
   for (let i = 1; i < n; i++) {
      // dp[i][0]: Maximum amount if the current house is not robbed
      // dp[i][1]: Maximum amount if the current house is robbed
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
      dp[i][1] = dp[i - 1][0] + nums[i];
   }

   // Return the maximum amount from the last house considering both robbing and not robbing it
   return Math.max(dp[n - 1][0], dp[n - 1][1]);
};

/**
 * Time Complexity: O(n)
 *   - Iterates through the array once, updating values for odd and even indexed houses.
 * Space Complexity: O(1)
 *   - Uses only two variables, 'odd' and 'even', to store intermediate results, resulting in constant space.
 */

var rob = function (nums) {
   let odd = 0; // Maximum amount if the current house is odd-indexed
   let even = 0; // Maximum amount if the current house is even-indexed

   // Iterate through the houses
   for (let i = 0; i < nums.length; ++i) {
      if (i % 2 === 0) {
         even = Math.max(odd, even + nums[i]);
      } else {
         odd = Math.max(even, odd + nums[i]);
      }
   }

   // Return the maximum amount considering both odd and even-indexed houses
   return Math.max(odd, even);
};
