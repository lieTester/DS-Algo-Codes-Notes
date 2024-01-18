/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
   // Create a 2D DP array to store results of subproblems
   const dp = Array(s.length)
      .fill(-1)
      .map(() => Array(s.length).fill(-1));

   const dfs = (i, j) => {
      // Base case: If i crosses j, return 0 (indicating an empty subsequence)
      if (i > j) return 0;
      // Base case: If i equals j, return 1 (indicating a subsequence with a single character)
      if (i === j) return 1;

      // If the subproblem is already solved, return the stored result
      if (dp[i][j] !== -1) return dp[i][j];

      let ans = 0;
      // If characters at indices i and j are the same, include them in the palindrome
      if (s[i] === s[j]) {
         ans = dfs(i + 1, j - 1) + 2;
      } else {
         // Characters are different, explore both possibilities by skipping one character each time
         ans = Math.max(dfs(i + 1, j), dfs(i, j - 1));
      }

      // Store and return the result for the subproblem
      return (dp[i][j] = ans);
   };

   return dfs(0, s.length - 1); // Start the recursive function from the beginning and end of the string
};

// Time complexity: O(n^2) - Where n is the length of the input string 's'.
// The function uses memoization to avoid recomputation of subproblems, reducing time complexity.

// Space complexity: O(n^2) - The DP array of size n * n is used to store results of subproblems.
// Additional space for the recursive stack is also required, which can go up to O(n) in the worst case.

// Explanation:
// The function uses a top-down approach with memoization to find the length of the longest palindromic subsequence.
// It defines a recursive function 'dfs' that explores two possibilities:
// - If characters at indices 'i' and 'j' are the same, include them in the palindrome and move to the inner subsequence.
// - If characters are different, explore both possibilities by skipping one character each time.
// The DP array 'dp' is used to store the results of subproblems to avoid redundant computations.

// Alternative approaches could involve bottom-up dynamic programming or tabulation instead of recursion.
// Bottom-up DP starts from smaller subproblems and builds up to the answer, often using a 2D array.
// Tabulation is an iterative method that fills up a table based on smaller subproblems and then uses it to solve the main problem.

var longestPalindromeSubseq = function (s) {
   const n = s.length;

   // Create a 2D DP array to store results of subproblems
   const dp = Array(n)
      .fill(0)
      .map(() => Array(n).fill(0));

   // Base case: Each character is a palindromic subsequence of length 1
   for (let i = 0; i < n; i++) {
      dp[i][i] = 1;
   }

   // Fill the DP array bottom-up, considering all possible subproblems
   for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
         const j = i + len - 1;

         // If characters at indices 'i' and 'j' are the same, include them in the palindrome
         if (s[i] === s[j]) {
            dp[i][j] = dp[i + 1][j - 1] + 2;
         } else {
            // Characters are different, take the maximum length by considering one less character at a time
            dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
         }
      }
   }

   return dp[0][n - 1]; // Length of the longest palindromic subsequence for the entire string
};

// Time complexity: O(n^2) - The function iterates through all possible subproblems in a bottom-up manner.
// Space complexity: O(n^2) - The DP array of size n * n is used to store results of subproblems.
