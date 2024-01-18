/**
 * @param {string[]} strs - Array of binary strings
 * @param {number} m - Maximum number of '0' digits allowed
 * @param {number} n - Maximum number of '1' digits allowed
 * @return {number} - Maximum number of strings that can be formed
 */
var findMaxForm = function (strs, m, n) {
   // Initialize a memoization table with -1 values
   const dp = Array(strs.length)
      .fill(-1)
      .map(() =>
         Array(m + 1)
            .fill(-1)
            .map(() => Array(n + 1).fill(-1))
      );

   // Create a map to store the count of '0's and '1's for each string
   const map = [];
   for (let i = 0; i < strs.length; ++i) {
      let zero = 0,
         one = 0;
      for (let c of strs[i]) {
         if (c === "0") ++zero;
         else ++one;
      }
      map[i] = [zero, one];
   }

   // Helper function to count '0's and '1's in a string
   const countZerosOnes = (str) => {
      let zeros = 0,
         ones = 0;
      for (let i = 0; i < str.length; i++) {
         if (str[i] === "0") zeros++;
         else ones++;
      }
      return [zeros, ones];
   };

   // Depth-first search (DFS) function to explore all possible combinations
   const dfs = (index, zeros, ones) => {
      // Base case: if all strings are processed, return 0
      if (index === strs.length) {
         return 0;
      }

      // If the result is already memoized, return the memoized value
      if (dp[index][zeros][ones] !== -1) return dp[index][zeros][ones];

      const [curZeros, curOnes] = map[index];

      // Consider taking the current string if there are enough zeros and ones available
      const taken =
         zeros - curZeros >= 0 && ones - curOnes >= 0
            ? 1 + dfs(index + 1, zeros - curZeros, ones - curOnes)
            : 0;

      // Consider not taking the current string
      const notTaken = dfs(index + 1, zeros, ones);

      // Update the memoization table with the maximum of taken and notTaken
      dp[index][zeros][ones] = Math.max(taken, notTaken);
      return dp[index][zeros][ones];
   };

   // Start the DFS from the first string with the given number of zeros and ones
   return dfs(0, m, n);
};

// Time complexity: O(len * m * n), where len is the number of strings in strs
// Each call to dfs explores two possibilities (take or not take) for each string, resulting in exponential time complexity.
// Memoization helps avoid redundant computations.

// Space complexity: O(len * m * n), where len is the number of strings in strs
// The memoization table dp requires space proportional to the product of the number of strings and the maximum number of zeros and ones.
// Additional space is used for the map array to store the count of zeros and ones for each string.
