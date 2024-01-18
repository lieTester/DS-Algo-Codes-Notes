/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
   // Get the number of cities
   const n = edges.length;

   // Initialize an array to represent disjoint sets
   var parent = Array(n)
      .fill()
      .map((_, index) => index);

   // Find function for disjoint set data structure
   const find = (x) => {
      if (parent[x] === x) return x;
      return (parent[x] = find(parent[x]));
   };

   var ans = [];

   // Iterate through the adjacency matrix
   for (let i = 0; i < n; ++i) {
      // Check if the two vertices of the current edge belong to the same set
      if (find(edges[i][0]) === find(edges[i][1])) {
         ans = edges[i]; // If yes, the edge is redundant
      }

      // Union operation to merge the sets of the two vertices
      parent[find(edges[i][0])] = parent[find(edges[i][1])];
   }

   return ans;
};

// Time complexity: O(n * α(n)), where α is the inverse Ackermann function
// Space complexity: O(n)

// Explanation:
// The code uses a disjoint set data structure to keep track of the connected components in the graph.
// The 'find' function performs path compression, which helps to optimize the find operation.
// The 'parent' array is used to represent disjoint sets, where each element initially points to itself.
// The code iterates through the edges and checks whether the two vertices of each edge belong to the same set.
// If they do, the edge is redundant, and the code returns it. Otherwise, the code performs a union operation to merge the sets.
// The time complexity is primarily determined by the 'find' function and the union operation, and it's nearly linear due to the inverse Ackermann function.
// The space complexity is O(n) due to the 'parent' array.

// Alternative: Using Union-Find with Rank and Path Compression
// Another way to implement the disjoint set is by maintaining rank to optimize union by rank.
// This doesn't significantly affect the time complexity in practice, but it provides a more balanced tree structure.
