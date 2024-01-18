/**
 * @param {number[]} A
 * @return {number}
 */
var maxProfit = function (A) {
   const n = A.length; // Get the length of the input array A

   // Initialize arrays to store left and right maximum profits at each index
   const dpL = Array(n).fill(0); // Array to store left maximum profits
   const dpR = Array(n).fill(0); // Array to store right maximum profits

   // Initialize variables to track minimum and maximum stock prices
   let minPrice = A[0]; // Track the minimum stock price from left to right
   let maxPrice = A[n - 1]; // Track the maximum stock price from right to left
   let ans = 0; // Initialize the maximum profit

   console.log(dpL, dpR, n, A); // Log initial values for debugging purposes

   // Calculate maximum profit achievable for each day starting from the left
   for (let i = 1; i < n; ++i) {
      dpL[i] = Math.max(dpL[i - 1], A[i] - minPrice); // Update dpL with left maximum profit
      minPrice = Math.min(minPrice, A[i]); // Update the minimum stock price seen so far

      ans = Math.max(ans, dpL[i]); // Update the overall maximum profit
   }

   // Calculate maximum profit achievable for each day starting from the right
   for (let i = n - 2; i >= 0; --i) {
      dpR[i] = Math.max(dpR[i + 1], maxPrice - A[i]); // Update dpR with right maximum profit
      maxPrice = Math.max(maxPrice, A[i]); // Update the maximum stock price seen so far
   }

   // Calculate the maximum profit by combining left and right maximum profits
   for (let i = 1; i < n; ++i) {
      ans = Math.max(ans, dpL[i - 1] + dpR[i]); // Combine left and right maximum profits
   }

   return ans; // Return the maximum profit achievable
};
