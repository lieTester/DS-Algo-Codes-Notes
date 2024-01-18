/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
   const visited = []; // Array to track visited nodes and their colors (+1 or -1)

   const dfs = (node, color) => {
      // Check if the node has been visited before
      if (visited[node]) {
         // If the visited node has a different color, the graph is not bipartite
         if (visited[node] !== color) return false;
         return true;
      }

      // Mark the current node as visited with the given color
      visited[node] = color;

      // Explore neighbors with the opposite color
      for (let neighbor of graph[node]) {
         if (!dfs(neighbor, -color)) return false;
      }

      return true;
   };

   // Iterate through all nodes in the graph
   for (let i = 0; i < graph.length; ++i) {
      // If the node is unvisited, start DFS from that node with color 1
      if (visited[i] === undefined && !dfs(i, 1)) {
         return false;
      }
   }

   return true; // The graph is bipartite
};

// Time complexity: O(V + E), where V is the number of vertices and E is the number of edges.
// Space complexity: O(V), for the 'visited' array.

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartiteBFS = function (graph) {
   const visited = new Array(graph.length).fill(0); // Array to track visited nodes and their colors (+1 or -1)

   for (let i = 0; i < graph.length; ++i) {
      if (visited[i] === 0) {
         const queue = [i];
         visited[i] = 1; // Color the starting node with color 1

         while (queue.length > 0) {
            const node = queue.shift();

            for (let neighbor of graph[node]) {
               if (visited[neighbor] === 0) {
                  visited[neighbor] = -visited[node]; // Assign the opposite color
                  queue.push(neighbor);
               } else if (visited[neighbor] === visited[node]) {
                  return false; // If adjacent nodes have the same color, the graph is not bipartite
               }
            }
         }
      }
   }

   return true; // The graph is bipartite
};

// Time complexity: O(V + E), where V is the number of vertices and E is the number of edges.
// Space complexity: O(V), for the 'visited' array.
