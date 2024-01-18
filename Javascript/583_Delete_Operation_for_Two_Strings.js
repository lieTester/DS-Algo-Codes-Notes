/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
   const len1 = word1.length,
      len2 = word2.length;
   const dp = Array(len1)
      .fill(-1)
      .map(() => Array(len2).fill(-1)); // Create a DP array for memoization

   const dfs = (i, j) => {
      // Base cases: If either word reaches its end, return the remaining length of the other word
      if (i >= len1) return len2 - j;
      if (j >= len2) return len1 - i;

      // If the result for current positions (i, j) is already computed, return it
      if (dp[i][j] !== -1) return dp[i][j];

      // If characters at current positions match, move to the next positions
      if (word1[i] === word2[j]) return (dp[i][j] = dfs(i + 1, j + 1));

      // If characters don't match, calculate the minimum of (insertion, deletion, substitution)
      return (dp[i][j] = Math.min(dfs(i + 1, j), dfs(i, j + 1)) + 1);
   };

   return dfs(0, 0); // Start from the beginning of both words
};

// Time complexity: O(len1 * len2) - where len1 and len2 are lengths of word1 and word2 respectively.
// Space complexity: O(len1 * len2) - The DP array size is proportional to the product of lengths of the words.
// Explanation:
// The function uses a recursive approach with memoization (DP) to find the minimum operations needed.
// It explores different possibilities of matching characters, inserting, deleting, or substituting characters
// to convert one word to another. The DP array stores previously computed results to avoid redundant computations.

// Alternative approaches could involve bottom-up DP (tabulation) or using a 2D array for memoization
// to improve space efficiency, especially for large inputs.
