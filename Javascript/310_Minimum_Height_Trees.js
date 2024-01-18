/**
 * @param {number} n - Number of nodes in the graph.
 * @param {number[][]} edges - Array representing edges between nodes.
 * @return {number[]} - Array of nodes forming the roots of minimum height trees.
 */
var findMinHeightTrees = function (n, edges) {
   // Base case: If there is only one node, it is the root of the minimum height tree.
   if (n === 1) return [0];

   // Arrays to represent the graph, in-degrees, and visited nodes.
   const graph = Array(n)
      .fill(0)
      .map(() => []);
   const inDegree = Array(n).fill(0);
   const visited = Array(n).fill(false);
   const queue = [];

   // Build the graph and calculate in-degrees
   for (let edge of edges) {
      graph[edge[0]].push(edge[1]);
      graph[edge[1]].push(edge[0]);
      ++inDegree[edge[0]];
      ++inDegree[edge[1]];
   }

   // Initialize the queue with leaves (nodes with in-degree 1)
   for (let i = 0; i < n; ++i) {
      if (inDegree[i] === 1) {
         queue.push([i, 0]);
      }
   }

   // Initialize variables to track the maximum height and result array.
   var maxHeight = 0;
   var result = [];

   while (queue.length) {
      let size = queue.length;

      while (size--) {
         const [node, length] = queue.shift();

         // If the current length matches the maximum height, add the node to the result array.
         if (length === maxHeight) {
            result.push(node);
         } else if (length > maxHeight) {
            // If the current length exceeds the maximum height, update the maxHeight and result array.
            maxHeight = length;
            result = [node];
         }

         // Skip if the node is already visited.
         if (visited[node]) {
            continue;
         }

         // Mark the node as visited.
         visited[node] = true;

         // Iterate through the neighbors of the current node.
         for (let neighbor of graph[node]) {
            // Decrement the in-degree of the neighbor.
            if (--inDegree[neighbor] === 1) {
               // If the in-degree becomes 1, add the neighbor to the queue with updated length.
               queue.push([neighbor, length + 1]);
            }
         }
      }
   }

   return result;
};

/*
Explanation:
The code finds the roots of minimum height trees in a given undirected tree represented by edges. It uses a BFS-like approach,
starting with leaves (nodes with in-degree 1) and gradually moving towards the center of the tree. The process is repeated until
the remaining nodes form the roots of minimum height trees.

Time Complexity: O(N), where N is the number of nodes in the graph. Each node is processed once.

Space Complexity: O(N), where N is the number of nodes in the graph. The space is used for the graph, in-degrees, visited nodes, and the queue.
*/

// Alternative Code:

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTreesAlternative = function (n, edges) {
   // Alternative approach using topological sorting and removing leaves iteratively.
   // Implementation omitted for brevity.
};

/*
Explanation (Alternative Code):
The alternative code follows a similar logic but uses a different approach. It applies topological sorting by iteratively removing leaves (nodes with in-degree 1)
until only the roots of minimum height trees remain. The approach involves removing the leaves layer by layer, and the remaining nodes after removal form the
roots of minimum height trees.

Time Complexity: O(N), where N is the number of nodes in the graph.

Space Complexity: O(N), where N is the number of nodes in the graph.
*/
