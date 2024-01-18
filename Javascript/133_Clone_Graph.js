/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
   // Check if the input node is null or undefined
   if (node === null || node === undefined) {
      return null;
   }

   // Map to store the mapping between original nodes and their corresponding clones
   const map = new Map();

   // Depth-first search (DFS) function to clone the graph
   const dfs = (node) => {
      // If the current node is already cloned, return its clone from the map
      if (map.has(node)) {
         return map.get(node);
      }

      // Create a new node with the same value as the original node
      var newNode = new Node(node.val);

      // Add the mapping between the original node and its clone to the map
      map.set(node, newNode);

      // Recursively clone the neighbors of the current node
      for (let neighbor of node.neighbors) {
         newNode.neighbors.push(dfs(neighbor));
      }

      return newNode;
   };

   // Start DFS from the input node to clone the entire graph
   return dfs(node);
};

/*
  Time complexity: O(V + E), where V is the number of vertices (nodes) and E is the number of edges in the graph.
  The DFS visits each node once, and for each node, it visits its neighbors once.

  Space complexity: O(V), where V is the number of vertices (nodes) in the graph.
  The space is used for the map to store the mapping between original nodes and their clones.

  Explanation:
  The function uses a depth-first search (DFS) approach to traverse the original graph and create a clone.
  The map is used to store the mapping between original nodes and their corresponding clones, preventing duplication.
*/

// Alternative approach: Breadth-First Search (BFS)
// Instead of using DFS, you can use BFS to traverse the graph level by level and create the clone.
// The space complexity in this case would be higher (O(V + E)) due to the queue used for BFS.
// Both approaches are valid, and the choice depends on the characteristics of the specific problem.
