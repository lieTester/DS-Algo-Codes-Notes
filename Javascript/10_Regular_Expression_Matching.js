/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
   var n = s.length; // Length of string 's'
   var m = p.length; // Length of pattern 'p'

   // Create a 2D array for DP (dynamic programming) memoization
   var dp = Array(n + 1)
      .fill(null)
      .map(() => Array(m + 1).fill(null));

   // DFS function to check if the strings match
   var dfs = (i, j) => {
      // If memoized value is available, return it
      if (dp[i][j] != null) return dp[i][j];

      // If both strings are exhausted, return true
      if (i >= n && j >= m) return true;

      if (i >= n) return j + 1 < m && p[j + 1] === "*" && dfs(i, j + 2);

      // Matching characters or '.' - move to the next characters
      var match = s[i] === p[j] || p[j] === ".";

      // Asterisk in 'p' - either move in 's' or move in 'p' to check for a match
      if (j + 1 < m && p[j + 1] === "*") {
         dp[i][j] = dfs(i, j + 2) || (match && dfs(i + 1, j));
         return dp[i][j];
      }

      return (dp[i][j] = match && dfs(i + 1, j + 1));
   };

   return dfs(0, 0); // Start DFS from the beginning of both strings
};

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Tabulation
///////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
   var n = s.length; // Length of string 's'
   var m = p.length; // Length of pattern 'p'

   // Create a 2D array for DP (dynamic programming) memoization
   var dp = Array(n + 1)
      .fill(null)
      .map(() => Array(m + 1).fill(false));

   // Base case: both empty strings match
   dp[0][0] = true;

   // Fill the DP table
   for (var i = 0; i <= n; i++) {
      for (var j = 1; j <= m; j++) {
         if (p[j - 1] === "*") {
            dp[i][j] =
               dp[i][j - 2] ||
               (i > 0 &&
                  (s[i - 1] === p[j - 2] || p[j - 2] === ".") &&
                  dp[i - 1][j]);
         } else {
            dp[i][j] =
               i > 0 &&
               dp[i - 1][j - 1] &&
               (s[i - 1] === p[j - 1] || p[j - 1] === ".");
         }
      }
   }

   return dp[n][m]; // The result is at the bottom right corner of the DP table
};
