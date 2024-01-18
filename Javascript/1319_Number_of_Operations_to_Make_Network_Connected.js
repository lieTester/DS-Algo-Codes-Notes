/**
 * @param {number} n - Number of computers (nodes).
 * @param {number[][]} connections - Array of connections between computers.
 * @return {number} - Minimum number of cables needed to connect all computers.
 */
var makeConnected = function (n, connections) {
   // Check if the number of cables is insufficient to connect all computers
   if (connections.length < n - 1) return -1;

   // Initialize parent array where each computer is initially its own parent
   const parent = Array(n)
      .fill()
      .map((_, index) => index);

   // Find function with path compression
   const find = (x) => {
      if (parent[x] === x) return x;
      return (parent[x] = find(parent[x]));
   };

   // Union operation
   for (let [u, v] of connections) {
      const rootU = find(u);
      const rootV = find(v);

      if (rootU !== rootV) {
         // If not in the same connected component, union them
         parent[rootU] = rootV;
      }
   }

   // Apply path compression to all nodes
   for (let i = 0; i < n; ++i) find(i);

   // Count the number of unique connected components
   const uniqueComponents = new Set(parent).size;

   // The minimum number of cables needed is the number of connected components minus 1
   return uniqueComponents - 1;
};

/*
Explanation:
- The function uses Union-Find (Disjoint Set) with path compression and union by rank.
- It checks if the number of cables is sufficient to connect all computers. If not, it returns -1.
- It initializes each computer as its own parent in the Union-Find data structure.
- It performs union operations based on the connections provided.
- After union operations, it applies path compression to all nodes for optimization.
- It counts the number of unique connected components using a Set.
- The minimum number of cables needed is the number of connected components minus 1.

Time complexity: O(N + E * α(N)), where N is the number of computers, E is the number of connections, and α(N) is the inverse Ackermann function, which is very slow-growing.
Space complexity: O(N), where N is the number of computers.
*/

/**
 * @param {number} n - Number of computers (nodes).
 * @param {number[][]} connections - Array of connections between computers.
 * @return {number} - Minimum number of cables needed to connect all computers.
 */
var makeConnected = function (n, connections) {
   if (connections.length < n - 1) return -1;

   // Build an adjacency list to represent the connections
   const adjacencyList = new Array(n).fill().map(() => []);

   for (const [u, v] of connections) {
      adjacencyList[u].push(v);
      adjacencyList[v].push(u);
   }

   // Array to track visited nodes during DFS
   const visited = Array(n).fill(false);

   // DFS function to traverse connected components
   const dfs = (node) => {
      visited[node] = true;
      for (const neighbor of adjacencyList[node]) {
         if (!visited[neighbor]) {
            dfs(neighbor);
         }
      }
   };

   // Count the number of connected components
   let connectedComponents = 0;

   // Iterate through each node and perform DFS if not visited
   for (let i = 0; i < n; i++) {
      if (!visited[i]) {
         dfs(i);
         connectedComponents++;
      }
   }

   // The minimum number of cables needed is the number of connected components minus 1
   return connectedComponents - 1;
};

/*
Explanation:
- The function uses Depth-First Search (DFS) to traverse connected components in the graph.
- It builds an adjacency list to represent the connections between computers.
- It tracks visited nodes during DFS to avoid redundant traversal.
- It iterates through each node and performs DFS if the node has not been visited, counting the connected components.
- The minimum number of cables needed is the number of connected components minus 1.

Time complexity: O(N + E), where N is the number of computers and E is the number of connections.
Space complexity: O(N + E), where N is the number of computers and E is the number of connections.
*/
