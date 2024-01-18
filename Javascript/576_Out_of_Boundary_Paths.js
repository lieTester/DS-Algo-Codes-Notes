/**
 * @param {number} m - Number of rows in the grid.
 * @param {number} n - Number of columns in the grid.
 * @param {number} maxMove - Maximum number of moves allowed.
 * @param {number} startRow - Starting row for the ball.
 * @param {number} startColumn - Starting column for the ball.
 * @return {number} - Number of paths the ball can take to exit the grid within maxMove moves.
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
   const dp = Array(m + 1)
      .fill(-1)
      .map(() =>
         Array(n + 1)
            .fill(-1)
            .map(() => Array(maxMove + 1).fill(-1))
      );
   const mod = 1e9 + 7;

   const dfs = (i, j, move) => {
      // If the ball is out of the grid, one path is found.
      if (i < 0 || j < 0 || j >= n || i >= m) return 1;

      // If no moves left, no valid path.
      if (move === 0) return 0;

      // If the result for the current state is already computed, return it.
      if (dp[i][j][move] !== -1) return dp[i][j][move];

      // Explore all possible moves (up, down, left, right) and calculate the total paths.
      var a = dfs(i + 1, j, move - 1) % mod;
      var b = dfs(i - 1, j, move - 1) % mod;
      var c = dfs(i, j + 1, move - 1) % mod;
      var d = dfs(i, j - 1, move - 1) % mod;

      // Store and return the result for the current state.
      return (dp[i][j][move] = (((a + b) % mod) + ((c + d) % mod)) % mod);
   };

   // Start DFS from the specified starting point with maxMove moves.
   return dfs(startRow, startColumn, maxMove);
};

// Time complexity: O(m * n * maxMove) - Each state is calculated once, and there are m * n * maxMove states.
// Space complexity: O(m * n * maxMove) - The memoization table is m * n * maxMove in size.
// Explanation:
// The function uses depth-first search (DFS) with memoization to calculate the number of paths.
// The state of the ball is represented by (i, j, move), where i and j are the current position, and move is the remaining moves.
// The memoization table (dp) stores the results for already computed states to avoid redundant calculations.

// Alternative approaches could involve dynamic programming (bottom-up/tabulation) to avoid recursion and improve efficiency.
// Additionally, optimizations like rolling arrays could be used to reduce the space complexity.
// This problem can also be solved using iterative dynamic programming rather than recursion.
