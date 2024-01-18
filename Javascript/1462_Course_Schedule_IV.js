/**
 * @param {number} numCourses - The total number of courses.
 * @param {number[][]} prerequisites - An array of prerequisite pairs, where each pair [a, b] indicates that course a is a prerequisite of course b.
 * @param {number[][]} queries - An array of query pairs, where each pair [a, b] asks whether course a is a prerequisite of course b.
 * @return {boolean[]} - An array of boolean values indicating whether each query is true or false.
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
   // 2D array to memoize whether course i is a prerequisite of course j
   const dp = Array(numCourses)
      .fill(-1)
      .map(() => Array(numCourses).fill(-1));
   // Adjacency list to represent the graph of prerequisites
   const graph = Array(numCourses)
      .fill(-1)
      .map(() => []);

   // Build the graph
   for (let [a, b] of prerequisites) {
      graph[b].push(a);
   }

   // Depth-first search to check if course `end` is a prerequisite of course `node`
   const dfs = (node, end) => {
      // Base case: If the current course is the target course, it is a prerequisite
      if (node === end) {
         return true;
      }

      // If the result is already memoized, return it
      if (dp[node][end] !== -1) {
         return dp[node][end];
      }

      // Iterate through the prerequisites of the current course
      for (let curr of graph[node]) {
         // If any of the prerequisites is a prerequisite of the target course, return true
         if (dfs(curr, end)) {
            return (dp[node][end] = true);
         }
      }

      // If none of the prerequisites is a prerequisite of the target course, return false
      return (dp[node][end] = false);
   };

   // Array to store the results of queries
   const result = [];

   // Check each query
   for (let [a, b] of queries) {
      // Check if course `a` is a prerequisite of course `b` using DFS
      result.push(dfs(b, a));
   }

   return result;
};

/*
Explanation:
The code checks whether each course in the queries array is a prerequisite of another course. It uses a depth-first search (DFS)
to traverse the graph of prerequisites and memoizes the results to avoid redundant computations.

Time Complexity: O(numCourses^2 + numQueries * numCourses), where numCourses is the total number of courses and numQueries is the number of queries.
The DFS part contributes to O(numCourses^2), and checking each query involves running DFS for each query.

Space Complexity: O(numCourses^2), where numCourses is the total number of courses. The space is used for the memoization array (dp) and the graph.

*/
