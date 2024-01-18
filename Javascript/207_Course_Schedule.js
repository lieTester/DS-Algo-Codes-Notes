/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
   // Array to track visited status of nodes during DFS
   const visited = new Array(numCourses).fill(0); // 0: unvisited, 1: visiting, 2: visited

   // Adjacency list representation of the directed graph
   const graph = Array(numCourses)
      .fill(0)
      .map(() => []);

   // Build the adjacency list based on prerequisites
   for (let pre of prerequisites) {
      graph[pre[0]].push(pre[1]);
   }

   // Depth-First Search function
   const dfs = (node) => {
      if (visited[node] === 1) return false; // Cycle detected
      if (visited[node] === 2) return true; // Already visited

      visited[node] = 1; // Mark as visiting

      // Explore neighbors recursively
      for (let curr of graph[node]) {
         if (!dfs(curr)) return false;
      }

      visited[node] = 2; // Mark as visited
      return true;
   };

   // Iterate through all nodes and start DFS if unvisited
   for (let i = 0; i < numCourses; ++i) {
      if (visited[i] === 0 && !dfs(i)) return false; // If cycle detected during DFS, return false
   }

   return true; // No cycle detected, all courses can be finished
};

// Time complexity: O(V + E), where V is the number of courses (vertices) and E is the number of prerequisites (edges).
// Space complexity: O(V + E) for the adjacency list and visited array.

// Explanation:
// The code uses a depth-first search (DFS) approach to check for cycles in a directed graph representing course prerequisites.
// The adjacency list is built based on the prerequisites.
// The DFS function explores nodes, marking them as visiting and visited, and returns false if a cycle is detected.
// The main function iterates through all nodes, starting DFS only for unvisited nodes, and returns false if any cycle is detected.
// If no cycles are detected, it means all courses can be finished, and the function returns true.

// Alternative approach: Topological Sorting with BFS can also be used to solve this problem.
