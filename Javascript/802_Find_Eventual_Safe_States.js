/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
   // Array to store whether a node is safe or not
   const dp = Array(graph.length);

   // Depth-First Search function to check if a node is eventually safe
   const dfs = (node) => {
      // If the node has no outgoing edges, it's safe
      if (dp[node] !== undefined) {
         return dp[node];
      }
      dp[node] = false; // Mark the node as unsafe initially

      // Recursively check the safety of each neighbor
      for (let neighbor of graph[node]) {
         if (!dfs(neighbor)) {
            return (dp[node] = false); // If any neighbor is not safe, the current node is not safe
         }
      }

      return (dp[node] = true); // If all neighbors are safe, mark the current node as safe
   };

   const ans = [];

   // Iterate through all nodes to check their safety status
   for (let node = 0; node < graph.length; ++node) {
      // If the safety status of the node is already determined or it's safe, add it to the result
      if (dp[node] || (dp[node] === undefined && dfs(node))) {
         ans.push(node);
      }
   }

   return ans;
};

/*
Explanation:
The function 'eventualSafeNodes' uses Depth-First Search (DFS) to determine if each node is eventually safe.
It maintains a 'dp' array to store the safety status of each node. The DFS function checks the safety of a node
by recursively checking the safety of its neighbors. If any neighbor is not safe, the current node is marked as unsafe.
If all neighbors are safe, the current node is marked as safe. The final result includes nodes that are either marked
as safe or have their safety status undetermined (undefined).

Time Complexity: O(N + E), where N is the number of nodes and E is the total number of edges in the graph.
Space Complexity: O(N), where N is the number of nodes (for the 'dp' array).
*/

// Alternative Code:

// An alternative approach using reverse graph and in-degrees:
// Explanation: Instead of checking the safety status by traversing outgoing edges,
// we can reverse the graph and count in-degrees. Nodes with in-degree 0 are eventually safe.
// This approach avoids the need for recursion and provides a different perspective on the problem.

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
   const reversedGraph = Array(graph.length)
      .fill(0)
      .map(() => []); // Reverse the edges of the given graph
   const inDegrees = Array(graph.length).fill(0); // Count in-degrees for each node

   // Initialize the reversed graph and count in-degrees
   for (let i = 0; i < graph.length; ++i) {
      reversedGraph.push([]);
      for (let neighbor of graph[i]) {
         reversedGraph[neighbor].push(i);
         inDegrees[i]++;
      }
   }

   const queue = [];

   // Add nodes with in-degree 0 to the queue (initial safe nodes)
   for (let i = 0; i < inDegrees.length; ++i) {
      if (inDegrees[i] === 0) {
         queue.push(i);
      }
   }

   const safeNodes = new Set();

   while (queue.length > 0) {
      const node = queue.shift();
      safeNodes.add(node);

      // Iterate through the neighbors in the reversed graph
      for (let neighbor of reversedGraph[node]) {
         // If removing the current node results in in-degree becoming 0, add to the queue
         if (--inDegrees[neighbor] === 0) {
            queue.push(neighbor);
         }
      }
   }

   // Convert set to array and sort in ascending order
   return Array.from(safeNodes).sort((a, b) => a - b);
};

/*
Alternative Explanation:
This alternative approach uses a reversed graph and in-degrees to find nodes that are eventually safe.
By counting in-degrees for each node in the reversed graph, nodes with in-degree 0 are identified as eventually safe.
The algorithm iteratively reduces the in-degrees of neighbors and adds nodes with in-degree 0 to the queue.
This approach provides a different solution to the problem with the same time complexity.

Alternative Time Complexity: O(N + E), where N is the number of nodes and E is the total number of edges in the graph.
Alternative Space Complexity: O(N), where N is the number of nodes (for the 'inDegrees' array and 'queue').
*/
