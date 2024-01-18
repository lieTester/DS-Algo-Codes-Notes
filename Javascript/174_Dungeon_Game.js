/**
 * Function to calculate the minimum initial health required for a knight to reach the princess
 * @param {number[][]} A - Dungeon matrix representing the health gain/loss at each cell
 * @return {number} - Minimum initial health needed
 */
var calculateMinimumHP = function (A) {
   // Get the number of rows and columns in the dungeon matrix
   var m = A.length,
      n = A[0].length;

   // Create a dynamic programming table to store calculated values
   // Initialize with null values to indicate that values haven't been calculated yet
   const dp = Array(m)
      .fill(null)
      .map(() => Array(n).fill(null));

   /**
    * Depth-First Search (DFS) function to recursively find the minimum initial health
    * @param {number} i - Row index of the current cell
    * @param {number} j - Column index of the current cell
    * @returns {number} - Minimum initial health needed to reach the princess from the current cell
    */
   const dfs = (i, j) => {
      // Base case: If outside the matrix boundaries, return Infinity
      if (i >= m || j >= n) return Infinity;

      // If the value is already calculated, return it
      if (dp[i][j] !== null) return dp[i][j];

      // Base case: If at the princess cell, calculate the minimum initial health needed
      if (i === m - 1 && j === n - 1) {
         return A[i][j] >= 0 ? 1 : Math.abs(A[i][j]) + 1;
      }

      // Calculate the minimum initial health needed at the current cell
      const nextCellMinHealth = Math.min(dfs(i + 1, j), dfs(i, j + 1));
      const currentCellHealth = Math.max(nextCellMinHealth - A[i][j], 1); // Ensure minimum health is 1

      // Memoize the calculated value in the dynamic programming table
      return (dp[i][j] = currentCellHealth);
   };

   // Start the DFS from the top-left cell (initial position of the knight)
   return dfs(0, 0);
};

/*
The time complexity of this approach is exponential, and the space complexity is O(m * n).
#### Time Complexity:

In the memoized recursive approach, the time complexity is affected by the number of unique subproblems that need to be solved.

*   At each cell, the function may need to evaluate the minimum health recursively.
*   So, the time complexity could be **O(m \* n)** in the worst case, where 'm' and 'n' are the dimensions of the dungeon matrix.
*   However, with memoization, the actual number of unique subproblems will be less than 'm \* n', potentially reducing the time.

#### Space Complexity:

*   The space complexity is primarily due to the memoization table ('dp') and the recursion stack.
*   The memoization table's size is **O(m \* n)** to store the results of subproblems.
*   The recursion depth can be at most 'm + n' in the worst case for a matrix of dimensions 'm x n', leading to additional space for the stack.
*/

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

var calculateMinimumHP = function (A) {
   var m = A.length,
      n = A[0].length;

   // Create a 2D array to store minimum initial health values
   const dp = Array.from({ length: m }, () => Array(n).fill(Infinity));

   // Base case: At the princess cell
   dp[m - 1][n - 1] = Math.max(1, 1 - A[m - 1][n - 1]);

   // Fill the last row of the dp table
   for (let i = n - 2; i >= 0; i--) {
      dp[m - 1][i] = Math.max(1, dp[m - 1][i + 1] - A[m - 1][i]);
   }

   // Fill the last column of the dp table
   for (let i = m - 2; i >= 0; i--) {
      dp[i][n - 1] = Math.max(1, dp[i + 1][n - 1] - A[i][n - 1]);
   }

   // Fill the rest of the dp table from bottom to top and right to left
   for (let i = m - 2; i >= 0; i--) {
      for (let j = n - 2; j >= 0; j--) {
         const minHealthOnExit = Math.min(dp[i + 1][j], dp[i][j + 1]);
         dp[i][j] = Math.max(1, minHealthOnExit - A[i][j]);
      }
   }

   // Return the minimum initial health needed at the starting cell
   return dp[0][0];
};

/* The time complexity of this tabulation approach is O(m * n), and the space complexity is O(m * n).
#### Time Complexity:

*   In the tabulation approach, there are four nested loops iterating over the entire matrix.
*   Hence, the time complexity is **O(m \* n)**, where 'm' and 'n' are the dimensions of the dungeon matrix.

#### Space Complexity:

*   The space complexity is primarily due to the dynamic programming table ('dp').
*   The space required for the table is **O(m \* n)** to store the minimum health values for each cell in the matrix. There is no additional space used apart from the input matrix and the dynamic programming table.
*/
