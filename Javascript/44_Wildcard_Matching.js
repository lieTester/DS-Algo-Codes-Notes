/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
   // Remove multiple consecutive asterisks in the pattern
   p = p.replace(/\*+/g, "*");

   var n = s.length; // Length of string 's'
   var m = p.length; // Length of pattern 'p'

   // Create a 2D array for DP (dynamic programming) memoization
   var dp = Array(n)
      .fill(null)
      .map(() => Array(m).fill(null));

   // DFS function to check if the strings match
   var dfs = (i, j) => {
      // If both strings are exhausted, return true
      if (i === n && j === m) return true;

      // If only 's' is exhausted and remaining 'p' is only '*'s, return true
      if (i === n) {
         if (
            p
               .slice(j)
               .split("*")
               .every((part) => !part)
         )
            return true;
         return false;
      }

      // If memoized value is available, return it
      if (dp[i][j] != null) return dp[i][j];

      // Matching characters or '?' - move to the next characters
      if (s[i] === p[j] || p[j] === "?") dp[i][j] = dfs(i + 1, j + 1);
      // Asterisk in 'p' - either move in 's' or move in 'p' to check for a match
      else if (p[j] === "*") dp[i][j] = dfs(i, j + 1) || dfs(i + 1, j);
      // No match found
      else dp[i][j] = false;

      return dp[i][j];
   };

   return dfs(0, 0); // Start DFS from the beginning of both strings
};
