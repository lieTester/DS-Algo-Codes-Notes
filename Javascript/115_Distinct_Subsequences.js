/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
   // If the length of s is smaller than the length of t, no distinct subsequence is possible
   if (s.length < t.length) return 0;

   var n = s.length; // Length of string s
   var m = t.length; // Length of string t

   // Initialize a 2D array 'dp' to store computed results for subproblems
   var dp = Array(n + 1)
      .fill(-1)
      .map(() => Array(m + 1).fill(-1));

   // Recursive function to count distinct subsequences
   var dfs = (i, j) => {
      // If all characters in t are matched, one distinct subsequence is found
      if (j == m) return 1;

      // If all characters in s are traversed but t isn't matched completely, return 0
      if (i == n) return 0;

      // If the result for the current subproblem is already computed, return it
      if (dp[i][j] != -1) return dp[i][j];

      var ans = 0;

      // If the characters at index i in s and j in t match, two possibilities:
      // 1. Include this matching character and move to the next character in both strings
      // 2. Move to the next character in s without including this matching character
      if (s[i] === t[j]) ans = dfs(i + 1, j + 1) + dfs(i + 1, j);
      // If the characters don't match, move to the next character in s without including this character
      else ans = dfs(i + 1, j);

      // Memoize the result for this subproblem
      return (dp[i][j] = ans);
   };

   // Start the recursion with indices pointing to the beginning of both strings
   return dfs(0, 0);
};
