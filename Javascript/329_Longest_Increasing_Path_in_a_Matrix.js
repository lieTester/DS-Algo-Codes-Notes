/**
 * @param {number[][]} matrix
 * @return {number}
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 * Fastest of all DFS
 */
var longestIncreasingPath = function (A) {
   const m = A.length;
   const n = A[0].length;

   // Create a memoization array 'dp' to store results of subproblems
   var dp = Array(m)
      .fill(null)
      .map(() => Array(n).fill(null));

   // DFS function to traverse and find the longest increasing path
   const dfs = (i, j) => {
      if (A[i][j] === -1) return 0;
      if (dp[i][j]) return dp[i][j];

      var ans = 0;
      var tmp = A[i][j];
      A[i][j] = -1;

      // Explore neighboring cells in four directions
      if (i + 1 < m && tmp < A[i + 1][j]) ans = Math.max(ans, dfs(i + 1, j));
      if (i - 1 >= 0 && tmp < A[i - 1][j]) ans = Math.max(ans, dfs(i - 1, j));
      if (j + 1 < n && tmp < A[i][j + 1]) ans = Math.max(ans, dfs(i, j + 1));
      if (j - 1 >= 0 && tmp < A[i][j - 1]) ans = Math.max(ans, dfs(i, j - 1));

      A[i][j] = tmp;
      return (dp[i][j] = ans + 1);
   };

   var ans = 0;

   // Iterate through each cell and find the longest increasing path starting from there
   for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
         ans = Math.max(ans, dfs(i, j));
      }
   }

   return ans;
};

/**
 * BFS
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */
var longestIncreasingPath = function (matrix) {
   if (matrix.length === 0 || matrix[0].length === 0) {
      return 0;
   }

   const m = matrix.length;
   const n = matrix[0].length;

   const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
   ];

   // Create a memoization array to store the length of increasing paths
   const dp = Array(m)
      .fill(null)
      .map(() => Array(n).fill(0));

   let maxLength = 1;

   const bfs = (i, j) => {
      const queue = [];
      queue.push([i, j, 1]);

      // Perform BFS
      while (queue.length > 0) {
         const [x, y, length] = queue.shift();

         // Explore neighboring cells in four directions
         for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            // Check if the new coordinates are within bounds and form an increasing path
            if (
               newX >= 0 &&
               newX < m &&
               newY >= 0 &&
               newY < n &&
               matrix[newX][newY] > matrix[x][y]
            ) {
               if (dp[newX][newY] < length + 1) {
                  queue.push([newX, newY, length + 1]);
                  dp[newX][newY] = Math.max(dp[newX][newY], length + 1);
                  maxLength = Math.max(maxLength, dp[newX][newY]);
               }
            }
         }
      }
   };

   // Enqueue all cells and their starting path lengths
   for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
         if (!dp[i][j]) {
            bfs(i, j);
         }
      }
   }

   return maxLength;
};

/**
 * Topological
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */
var longestIncreasingPath = function (matrix) {
   if (matrix.length === 0 || matrix[0].length === 0) {
      return 0;
   }

   const m = matrix.length;
   const n = matrix[0].length;

   const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
   ];

   // Create a graph represented as an adjacency list
   const graph = Array(m * n)
      .fill(null)
      .map(() => []);

   // Build the graph by adding directed edges
   for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
         for (const [dx, dy] of directions) {
            const newX = i + dx;
            const newY = j + dy;

            if (
               newX >= 0 &&
               newX < m &&
               newY >= 0 &&
               newY < n &&
               matrix[newX][newY] > matrix[i][j]
            ) {
               const fromNode = i * n + j;
               const toNode = newX * n + newY;
               graph[fromNode].push(toNode);
            }
         }
      }
   }

   // Create a memoization array to store the length of increasing paths
   const dp = Array(m * n).fill(-1);

   // Perform topological sorting and update the dp array
   const topologicalSort = (node) => {
      if (dp[node] !== -1) {
         return dp[node];
      }

      let maxPath = 1;

      for (const neighbor of graph[node]) {
         maxPath = Math.max(maxPath, 1 + topologicalSort(neighbor));
      }

      dp[node] = maxPath;
      return maxPath;
   };

   let maxLength = 0;

   // Perform topological sorting for each node in the graph
   for (let i = 0; i < m * n; ++i) {
      maxLength = Math.max(maxLength, topologicalSort(i));
   }

   return maxLength;
};
