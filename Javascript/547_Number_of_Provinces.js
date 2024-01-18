/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
   // Get the number of cities
   const n = isConnected.length;

   // Initialize an array to represent disjoint sets
   var parent = Array(n)
      .fill()
      .map((_, index) => index);

   // Find function for disjoint set data structure
   const find = (x) => {
      if (parent[x] === x) return x;
      return (parent[x] = find(parent[x]));
   };

   // Iterate through the adjacency matrix
   for (let i = 0; i < n; ++i) {
      for (let j = i; j < n; ++j) {
         // If there is a connection, union the sets
         if (isConnected[i][j]) {
            parent[find(i)] = find(j);
         }
      }
   }

   // Use a set to store unique roots (representatives) of connected components
   let uniqueRoots = new Set();
   for (let i = 0; i < n; ++i) {
      uniqueRoots.add(find(i));
   }

   // The size of the set represents the number of connected components
   return uniqueRoots.size;
};

/*
Explanation:
- The code uses the union-find (disjoint set) data structure to find connected components in the graph.
- It iterates through the adjacency matrix and unions the sets of connected vertices.
- The find function is used to find the root (representative) of each set efficiently.
- After processing the entire matrix, a set is used to collect unique roots, representing connected components.
- The size of the set gives the number of connected components.
- Time Complexity: O(n^2 * α(n)), where α(n) is the inverse Ackermann function (effectively constant).
- Space Complexity: O(n) for the parent array and uniqueRoots set.
*/

// Alternative:
// This problem can also be solved using depth-first search (DFS) or breadth-first search (BFS).
// Each approach would involve traversing the graph and marking visited nodes to identify connected components.

////////////////////////////////////////////////////////////////////////
// depth-first search (DFS)
////////////////////////////////////////////////////////////////////////
var findCircleNum = function (isConnected) {
   const n = isConnected.length;
   const visited = Array(n).fill(false);
   let components = 0;

   const dfs = (node) => {
      visited[node] = true;

      for (let neighbor = 0; neighbor < n; neighbor++) {
         if (isConnected[node][neighbor] === 1 && !visited[neighbor]) {
            dfs(neighbor);
         }
      }
   };

   for (let i = 0; i < n; i++) {
      if (!visited[i]) {
         components++;
         dfs(i);
      }
   }

   return components;
};

/*
Explanation:
- The DFS approach involves starting from each unvisited node and traversing its connected component.
- The visited array is used to keep track of nodes that have been visited.
- For each unvisited node, a new connected component is found, and DFS is applied to traverse the entire component.
- The count of connected components is returned.
- Time Complexity: O(n^2), where n is the number of cities.
- Space Complexity: O(n) for the visited array.
*/

////////////////////////////////////////////////////////////////////////
// breadth-first search (BFS)
////////////////////////////////////////////////////////////////////////

var findCircleNumBFS = function (isConnected) {
   const n = isConnected.length;
   const visited = Array(n).fill(false);
   let components = 0;

   const bfs = (start) => {
      const queue = [start];
      visited[start] = true;

      while (queue.length > 0) {
         const node = queue.shift();

         for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[node][neighbor] === 1 && !visited[neighbor]) {
               queue.push(neighbor);
               visited[neighbor] = true;
            }
         }
      }
   };

   for (let i = 0; i < n; i++) {
      if (!visited[i]) {
         components++;
         bfs(i);
      }
   }

   return components;
};

/*
Explanation:
- The BFS approach involves starting from each unvisited node and traversing its connected component using a queue.
- The visited array is used to keep track of nodes that have been visited.
- For each unvisited node, a new connected component is found, and BFS is applied to traverse the entire component.
- The count of connected components is returned.
- Time Complexity: O(n^2), where n is the number of cities.
- Space Complexity: O(n) for the visited array and the queue.
*/
