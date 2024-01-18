/**
 * @param {number} n - Number of gardens (nodes).
 * @param {number[][]} paths - Array of paths between gardens.
 * @return {number[]} - Array representing the assigned flowers for each garden.
 */
var gardenNoAdj = function (n, paths) {
   // Create an adjacency list (graph) to represent paths between gardens.
   const graph = Array(n)
      .fill(0)
      .map(() => []);

   // Array to store the assigned flowers for each garden.
   const dp = [];

   // Build the graph based on the given paths.
   for (let [u, v] of paths) {
      graph[u - 1].push(v - 1);
      graph[v - 1].push(u - 1);
   }

   // Depth-First Search function to assign flowers to each garden.
   const dfs = (node) => {
      // If flowers are already assigned, return.
      if (dp[node] !== undefined) {
         return;
      }

      // Initial bitmask with all colors available (15 in binary: 1111).
      let color = 15;

      // Check colors of adjacent gardens and remove them from the available colors.
      for (let curr of graph[node]) {
         if (dp[curr] !== undefined) {
            color = color & ~(1 << (dp[curr] - 1));
         }
      }

      // Assign the first available color to the current garden.
      if (color & 1) dp[node] = 1; // (1 << 0)
      else if (color & 2) dp[node] = 2; // (1 << 1)
      else if (color & 4) dp[node] = 3; // (1 << 2)
      else dp[node] = 4;

      // Recursively call DFS on adjacent gardens.
      for (let curr of graph[node]) {
         if (dp[curr] !== undefined) {
            dfs(curr);
         }
      }
   };

   // Iterate through each garden and assign flowers using DFS.
   for (let i = 0; i < n; ++i) {
      dfs(i);
   }

   // Return the array representing the assigned flowers for each garden.
   return dp;
};

/*
Explanation:
1. The function uses Depth-First Search (DFS) to assign flowers to each garden while avoiding adjacent gardens having the same color.
2. It creates an adjacency list (graph) based on the given paths.
3. For each garden, it calculates the available colors by checking adjacent gardens and removes those colors from a bitmask.
4. The first available color is assigned to the current garden.
5. DFS is recursively called on adjacent gardens.
6. The final array 'dp' represents the assigned flowers for each garden.

Time Complexity: O(N + E), where N is the number of gardens and E is the number of paths.
Space Complexity: O(N) for the graph and visited arrays, and O(N) for the recursion call stack in the DFS*/
