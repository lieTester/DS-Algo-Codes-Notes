/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
   // Create an adjacency list (graph) to represent the equations and values
   const graph = [];
   // Array to keep track of visited nodes during DFS
   var visited = [];

   // Build the graph from the given equations and values
   for (let i = 0; i < equations.length; ++i) {
      if (graph[equations[i][0]] === undefined) graph[equations[i][0]] = [];
      if (graph[equations[i][1]] === undefined) graph[equations[i][1]] = [];
      graph[equations[i][0]].push([equations[i][1], values[i]]);
      graph[equations[i][1]].push([equations[i][0], 1 / values[i]]);
   }

   // Depth-first search function to find the result of a query
   const dfs = (node, end) => {
      // If the destination node is reached, return 1
      if (node === end) return 1;

      if (visited[node]) return Infinity;

      // Mark the current node as visited
      visited[node] = true;

      // Explore neighbors and recursively find the result
      for (let curr of graph[node]) {
         let ans = dfs(curr[0], end);
         if (ans !== Infinity) {
            // Update memoization and return the result
            visited[node] = false;
            return ans * curr[1];
         }
      }

      // Unmark the current node and return Infinity if the destination is not reached
      visited[node] = false;
      return Infinity;
   };

   // Array to store the results of queries
   const ans = Array(queries.length).fill(-1);

   // Process each query
   for (let i = 0; i < queries.length; ++i) {
      // Check if the nodes in the query exist in the graph
      if (
         graph[queries[i][0]] === undefined ||
         graph[queries[i][1]] === undefined
      )
         continue;

      // Find the result using DFS
      let res = dfs(queries[i][0], queries[i][1]);

      // Update the result array if a valid result is obtained
      if (res !== Infinity) ans[i] = res;
   }

   return ans;
};

// Time complexity: O((E+V) * Q), where E is the number of equations, V is the number of variables,
// and Q is the number of queries. In the worst case, we may need to traverse all edges and nodes
// for each query.
// Space complexity: O(E + V), where E is the number of equations and V is the number of variables.
// The space is used to store the adjacency list (graph) and memoization.

// Alternative Approach (Floyd-Warshall Algorithm):
// Another approach to solve this problem is to use the Floyd-Warshall algorithm to compute all
// pairs of nodes' results in a single pass. This approach has a time complexity of O(V^3),
// where V is the number of variables, and it does not require DFS or memoization.
// However, it has a higher time complexity compared to the DFS-based solution for sparse graphs.




// Implementing the Floyd-Warshall algorithm
var floydWarshall = function(equations, values) {
    const n = equations.length * 2;
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

    for (let i = 0; i < n; i++) {
        dist[i][i] = 1.0;
    }

    for (let i = 0; i < equations.length; i++) {
        const [src, dest] = equations[i];
        const weight = values[i];

        const srcIdx = i * 2;
        const destIdx = i * 2 + 1;

        dist[srcIdx][destIdx] = weight;
        dist[destIdx][srcIdx] = 1 / weight;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] * dist[k][j]);
            }
        }
    }

    return dist;
};
