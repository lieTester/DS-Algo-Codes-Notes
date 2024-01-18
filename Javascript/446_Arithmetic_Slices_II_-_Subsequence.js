/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
   let count = 0;
   const dp = new Array(nums.length); // Dynamic programming array to store counts

   for (let i = 0; i < nums.length; i++) {
      dp[i] = {};
      for (let j = 0; j < i; j++) {
         const diff = nums[i] - nums[j];
         const prevCount = dp[j][diff] || 0; // Get previous count for the current difference
         const currentCount = dp[i][diff] || 0; // Get the current count for the difference

         count += prevCount; // Accumulate the counts for subsequences ending at i with the difference

         // Increment the count for subsequences ending at i with the difference
         dp[i][diff] = (currentCount || 0) + prevCount + 1;
      }
   }

   return count;
};

// Time complexity: O(n^2) where 'n' is the length of nums
// Space complexity: O(n^2) for the dp array
