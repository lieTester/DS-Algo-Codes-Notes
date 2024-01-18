/**
 * @param {number} n - Number of people
 * @param {number[][]} dislikes - Array of dislike pairs
 * @return {boolean} - True if it is possible to divide the group into two disjoint sets, false otherwise
 */
var possibleBipartition = function (n, dislikes) {
   // Create an adjacency list representation of the graph
   const graph = Array(n)
      .fill(0)
      .map(() => []);
   const dp = []; // Memoization array to store the color assigned to each node

   // Populate the adjacency list
   for (let [u, v] of dislikes) {
      graph[u - 1].push(v - 1);
      graph[v - 1].push(u - 1);
   }

   /**
    * Depth-first search function to check if the graph can be bipartitioned
    * @param {number} node - Current node
    * @param {number} color - Color assigned to the current node (1 or -1)
    * @returns {boolean} - True if bipartition is possible, false otherwise
    */
   const dfs = (node, color) => {
      if (dp[node]) {
         // If the color is already assigned, check if it matches the expected color
         return dp[node] === color;
      }

      dp[node] = color;

      // Explore neighbors and check if bipartition is possible
      for (let neighbor of graph[node]) {
         if (!dfs(neighbor, -color)) {
            return false;
         }
      }

      return true;
   };

   // Iterate through each node and perform DFS
   for (let i = 0; i < n; ++i) {
      if (dp[i] === undefined && !dfs(i, 1)) {
         // If bipartition is not possible starting from the current node, return false
         return false;
      }
   }

   return true; // Bipartition is possible

   // Time complexity: O(N + E), where N is the number of nodes (people) and E is the number of edges (dislikes.length)
   // Space complexity: O(N), for the graph and memoization array
};

/*
 * Alternative Approach:
 * An alternative approach to check if the graph is bipartite is to use BFS (breadth-first search).
 * The idea is to start from each unvisited node, color it, and then color its neighbors with the opposite color.
 * If at any point a neighbor has the same color as the current node, the graph is not bipartite.
 * Below is the alternative code snippet:
 */

/**
 * @param {number} n - Number of people
 * @param {number[][]} dislikes - Array of dislike pairs
 * @return {boolean} - True if it is possible to divide the group into two disjoint sets, false otherwise
 */
var possibleBipartitionAlternative = function (n, dislikes) {
   const graph = Array(n)
      .fill(0)
      .map(() => []);
   const colors = Array(n).fill(0); // Colors array to store the color assigned to each node

   for (let [u, v] of dislikes) {
      graph[u - 1].push(v - 1);
      graph[v - 1].push(u - 1);
   }

   const bfs = (start) => {
      const queue = [start];
      colors[start] = 1;

      while (queue.length > 0) {
         const current = queue.shift();

         for (let neighbor of graph[current]) {
            if (colors[neighbor] === 0) {
               // If neighbor is uncolored, assign the opposite color and enqueue
               colors[neighbor] = -colors[current];
               queue.push(neighbor);
            } else if (colors[neighbor] === colors[current]) {
               // If neighbor has the same color as the current node, the graph is not bipartite
               return false;
            }
         }
      }

      return true;
   };

   for (let i = 0; i < n; ++i) {
      if (colors[i] === 0 && !bfs(i)) {
         // If bipartition is not possible starting from the current node, return false
         return false;
      }
   }

   return true;
   // Time complexity: O(N + E), where N is the number of nodes (people) and E is the number of edges (dislikes.length)
   // Space complexity: O(N), for the graph and colors array
};
