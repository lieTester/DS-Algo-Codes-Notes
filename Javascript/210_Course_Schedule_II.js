/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
   const ans = []; // Array to store the result order of courses

   // Array to track visited status of nodes during DFS
   // 0: unvisited, 1: visiting, 2: visited
   const visited = new Array(numCourses).fill(0);

   // Adjacency list representation of the directed graph
   const graph = Array(numCourses)
      .fill(0)
      .map(() => []);

   // Build the adjacency list based on prerequisites
   for (let pre of prerequisites) {
      graph[pre[0]].push(pre[1]);
   }

   // Depth-First Search (DFS) function to explore the graph
   const dfs = (node) => {
      if (visited[node] === 1) return false; // Cycle detected
      if (visited[node] === 2) return true; // Node already visited

      visited[node] = 1; // Mark node as visiting

      // Explore neighbors (prerequisites)
      for (let curr of graph[node]) {
         if (!dfs(curr)) return false; // If cycle detected in the subgraph, return false
      }

      visited[node] = 2; // Mark node as visited
      ans.push(node); // Add the node to the result order
      return true;
   };

   // Iterate through all nodes and perform DFS
   for (let i = 0; i < numCourses; ++i) {
      if (!dfs(i)) return []; // If cycle detected during DFS, return an empty array
   }

   // If the result order has the same number of courses as 'numCourses', return the result
   return ans.length === numCourses ? ans : [];
};

// Time complexity: O(V + E), where V is the number of courses (nodes) and E is the number of prerequisites (edges).
// Space complexity: O(V + E), the space used for the graph representation and the visited array.

// Explanation:
// The code uses a Depth-First Search (DFS) approach to traverse the directed graph formed by prerequisites.
// It checks for cycles during the DFS traversal. If a cycle is detected, the function returns an empty array.
// The result order is stored in the 'ans' array and is returned in reverse order since the DFS explores nodes in a bottom-up manner.
// The algorithm has a time complexity of O(V + E) and a space complexity of O(V + E).

// Alternative Approach:
// Another common approach is using a Breadth-First Search (BFS) algorithm, where you maintain the in-degrees of each node.
// You start with nodes having in-degrees of 0, gradually reduce in-degrees, and update the result order.
// The BFS approach also has a time complexity of O(V + E) but may have a different structure in the implementation.
