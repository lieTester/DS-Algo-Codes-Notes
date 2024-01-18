/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */

/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 * Description: This approach uses binary search to find the length of the
 * Longest Increasing Subsequence (LIS) in the 'nums' array.
 */
var lengthOfLIS = function (nums) {
   const dp = [];

   for (const num of nums) {
      let left = 0;
      let right = dp.length;

      while (left < right) {
         const mid = Math.floor((left + right) / 2);
         if (dp[mid] < num) {
            left = mid + 1;
         } else {
            right = mid;
         }
      }

      dp[left] = num;
   }

   return dp.length;
};
var lengthOfLIS = function (nums) {
   // Create an empty array 'dp' to store the increasing subsequence
   var dp = [];

   // Iterate through each element in 'nums'
   for (let i = 0; i < nums.length; ++i) {
      // Find the index where 'nums[i]' can be inserted into 'dp'
      var indx = dp.findIndex((el) => el >= nums[i]);

      // If 'indx' is -1, it means 'nums[i]' is greater than all elements in 'dp'
      // Hence, push 'nums[i]' to 'dp'
      if (indx === -1) {
         dp.push(nums[i]);
      } else {
         // Otherwise, update the value at 'indx' with 'nums[i]'
         dp[indx] = nums[i];
      }
   }

   // The length of 'dp' represents the length of the LIS
   return dp.length;
};
/*
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * Description: This approach utilizes dynamic programming with an array 'dp'
 * to find the length of the Longest Increasing Subsequence (LIS) in the 'nums' array.
 *
 */

var lengthOfLIS = function (nums) {
   if (nums.length === 0) return 0;

   const dp = new Array(nums.length).fill(1);

   for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
         if (nums[i] > nums[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
         }
      }
   }

   return Math.max(...dp);
};
