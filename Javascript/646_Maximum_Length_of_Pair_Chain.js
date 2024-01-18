/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
   // Sort pairs by the second element in ascending order
   pairs.sort((a, b) => a[1] - b[1]);

   var dp = []; // Dynamic programming array to store the longest chain

   for (let i = 0; i < pairs.length; ++i) {
      let left = 0;
      let right = dp.length;

      while (left < right) {
         const mid = Math.floor((left + right) / 2);
         if (dp[mid][1] < pairs[i][0]) {
            left = mid + 1;
         } else {
            right = mid;
         }
      }

      // If the current pair extends the longest chain, update the DP array
      if (left >= dp.length) {
         dp.push(pairs[i]);
      } else if (dp[left][1] < pairs[i][0]) {
         dp[left] = pairs[i];
      }
   }

   return dp.length; // Return the length of the longest chain
};

// Time complexity: O(n log n) - Sorting the pairs takes O(n log n) time. The subsequent loop takes O(n log k),
// where k is the length of the dynamic programming array (dp). However, k ≤ n, so overall it's O(n log n).
// Space complexity: O(n) - The dynamic programming array can grow up to the length of the input pairs.

// Explanation:
// The code sorts the pairs based on the second element in ascending order.
// It then uses a binary search-like approach with a dynamic programming array (dp) to find the longest chain.
// For each pair, it tries to find the correct position in the dp array where the chain can be extended.
// If the pair extends the longest chain, it updates the dp array or adds a new pair at the end.
// Finally, it returns the length of the longest chain.

// Alternative approaches could involve dynamic programming using memoization or using a greedy algorithm.
// Dynamic programming with memoization can track the longest chain lengths efficiently, similar to the LIS problem.
// A greedy algorithm might involve iterating through the pairs in a specific order to maximize the chain length.

var findLongestChainGreedy = function (pairs) {
   pairs.sort((a, b) => a[1] - b[1]); // Sort pairs by the second element in ascending order
   let currentEnd = Number.NEGATIVE_INFINITY;
   let longestChain = 0;

   for (const pair of pairs) {
      // If the current pair's first element is greater than or equal to the previous pair's second element,
      // update the chain length and set the current pair's second element as the new endpoint.
      if (pair[0] > currentEnd) {
         longestChain++;
         currentEnd = pair[1];
      }
   }

   return longestChain; // Return the length of the longest chain
};

// Time complexity: O(n log n) - Sorting the pairs takes O(n log n) time.
// Space complexity: O(1) - No additional space used, except for the input pairs.

// Explanation:
// The code sorts the pairs based on the second element in ascending order.
// It iterates through the sorted pairs and greedily selects pairs that extend the longest chain.
// If the current pair's first element is greater than the previous pair's second element,
// it increments the chain length and updates the endpoint.
// Finally, it returns the length of the longest chain.

// The greedy approach takes advantage of the sorted nature of pairs to select pairs efficiently.
// It does not require additional space beyond the input and is optimized for this specific problem.
