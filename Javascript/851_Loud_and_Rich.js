/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
   // dp array to store the result for each person
   const dp = Array(quiet.length);
   // Adjacency list representing the graph of richer relationships
   const graph = Array(quiet.length)
      .fill(0)
      .map(() => []);

   // Build the graph from the richer relationships
   for (let [u, v] of richer) {
      graph[v].push(u);
   }

   // Depth-first search (DFS) function to find the quietest person in the hierarchy
   const dfs = (node) => {
      // If the result for the current node is already computed, return it
      if (dp[node]) {
         return dp[node];
      }

      // Initialize the answer with the current node
      let ans = node;

      // Explore richer relationships and find the quietest person
      for (let curr of graph[node]) {
         let temp = dfs(curr);
         if (quiet[temp] < quiet[ans]) {
            ans = temp;
         }
      }

      // Store the result in the dp array and return
      return (dp[node] = ans);
   };

   // Perform DFS for each person to find the quietest person in their hierarchy
   for (let i = 0; i < quiet.length; ++i) {
      dfs(i);
   }

   return dp;
};

// Explanation:
// This code uses a depth-first search (DFS) approach to find the quietest person in each hierarchy.
// It builds a graph based on the richer relationships and then recursively explores each person's hierarchy.
// The result for each person is stored in the dp array to avoid redundant computations.

// Time complexity: O(N + E), where N is the number of people (quiet.length) and E is the number of richer relationships.
// The DFS function is called once for each person, and in each call, it explores the hierarchy, resulting in O(N + E).

// Space complexity: O(N + E), where N is the number of people (quiet.length) and E is the number of richer relationships.
// The graph adjacency list is created with O(E) space, and the dp array uses O(N) space.

// Alternative Code and Explanation:

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRichAlternative = function (richer, quiet) {
   const result = Array(quiet.length).fill(-1);

   const dfsAlternative = (node) => {
      if (result[node] !== -1) {
         return result[node];
      }

      result[node] = node;

      for (let richerPerson of richer) {
         if (richerPerson[1] === node) {
            const quieterPerson = dfsAlternative(richerPerson[0]);
            if (quiet[quieterPerson] < quiet[result[node]]) {
               result[node] = quieterPerson;
            }
         }
      }

      return result[node];
   };

   for (let i = 0; i < quiet.length; ++i) {
      dfsAlternative(i);
   }

   return result;
};

// Explanation:
// This alternative code uses a similar DFS approach but with a different representation of the richer relationships.
// It directly iterates through the richer array and finds the quieter person in each relationship.
// The result is stored in the 'result' array.

// Time complexity: O(N * E), where N is the number of people (quiet.length) and E is the number of richer relationships.
// The DFS function is called for each person, and in each call, it iterates through the richer array, resulting in O(N * E).

// Space complexity: O(N), where N is the number of people (quiet.length).
// The 'result' array is used to store the result for each person.
