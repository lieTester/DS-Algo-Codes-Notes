/**
 * Function to find the maximum product of a contiguous subarray within an array of integers.
 * @param {number[]} nums - Array of integers
 * @return {number} - Maximum product of a contiguous subarray
 */
var maxProduct = function (nums) {
   // Initialize variables to keep track of maximum product, minimum product, and final answer
   let maxm = nums[0]; // Initialize maxm with the first element of the array
   let minm = nums[0]; // Initialize minm with the first element of the array
   let ans = nums[0]; // Initialize ans with the first element of the array

   // Iterate through the array starting from the second element
   for (let i = 1; i < nums.length; ++i) {
      // If the current number is negative, swap maxm and minm
      if (nums[i] < 0) [maxm, minm] = [minm, maxm];

      // Update the maximum product by taking the maximum of:
      // - The current number OR
      // - The current number multiplied by the previous maximum product
      maxm = Math.max(maxm * nums[i], nums[i]);

      // Update the minimum product by taking the minimum of:
      // - The current number OR
      // - The current number multiplied by the previous minimum product
      minm = Math.min(minm * nums[i], nums[i]);

      // Update the final answer by taking the maximum of the current maximum product and the previous answer
      ans = Math.max(maxm, ans);
   }

   // Return the maximum product found
   return ans;
};
