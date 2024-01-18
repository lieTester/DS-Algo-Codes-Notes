/**
 * @param {string} s
 * @return {number}
 */
// Accepted Complete Tabulation T(O)=O(n^2) S(O)=O(n^2)
var minCut = function (s) {
   const n = s.length;

   // Initialize a 2D array to store palindrome information for substrings
   const dpPal = Array(n)
      .fill(0)
      .map(() => Array(n).fill(false));

   // Initialize an array to store the minimum cuts needed for each position
   const dpMain = Array(n).fill(Number.MAX_SAFE_INTEGER);

   // Function to precompute palindrome information for substrings
   for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
         // Check if the substring s[j...i] is a palindrome
         if (s[i] === s[j] && (i - j < 2 || dpPal[j + 1][i - 1])) {
            dpPal[j][i] = true;
         }
      }
   }

   // Base case: No cuts needed for an empty string
   dpMain[0] = 0;

   // Dynamic programming to calculate minimum cuts
   for (let i = 1; i < n; i++) {
      for (let j = 0; j <= i; j++) {
         // If s[j...i] is a palindrome, update the minimum cuts needed
         if (dpPal[j][i]) {
            // If j is 0 (start of the string), no additional cut is needed
            // Otherwise, update the minimum cuts based on the previous position
            dpMain[i] = Math.min(dpMain[i], j === 0 ? 0 : dpMain[j - 1] + 1);
         }
      }
   }

   return dpMain[n - 1]; // Return the minimum cuts needed for the entire string
};

// Accepted Complete Tabulation + Memoization T(O)=O(n^2) S(O)=O(n^2)
var minCut = function (s) {
   const n = s.length;
   const dpPal = Array(n + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(null));
   const dpMain = Array(n + 1).fill(null);

   // Function to precompute palindrome information for substrings
   for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
         if (s[i] === s[j] && (i - j < 2 || dpPal[j + 1][i - 1])) {
            dpPal[j][i] = true;
         }
      }
   }

   const dfs = (indx) => {
      if (dpMain[indx]) return dpMain[indx];
      if (dpPal[indx][n - 1]) return 0;

      let max = n - indx;
      for (let i = indx; i < n; ++i) {
         if (dpPal[indx][i]) {
            max = Math.min(max, dfs(i + 1) + 1);
         }
      }
      return (dpMain[indx] = max);
   };
   return dfs(0);
};

// TLE Complete Memoization T(O)=O(n^2) S(O)=O(n^2)
// althought time and space complexity is sam but what make it TLE is
// the function call Stack for isPal and dfs both.
var minCut = function (s) {
   const n = s.length;
   const dpPal = Array(n + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(null));
   const dpMain = Array(n + 1).fill(null);

   const isPal = (i, j) => {
      if (i > j) return true;

      if (dpPal[i][j]) return dpPal[i][j];
      else if (s[i] === s[j]) return (dpPal[i][j] = isPal(i + 1, j - 1));
      return (dpPal[i][j] = false);
   };

   const dfs = (indx) => {
      if (dpMain[indx]) return dpMain[indx];
      if (isPal(indx, n - 1)) return 0;

      let max = n - indx;
      for (let i = indx; i < n; ++i) {
         if (isPal(indx, i)) {
            max = Math.min(max, dfs(i + 1) + 1);
         }
      }
      return (dpMain[indx] = max);
   };
   return dfs(0);
};
