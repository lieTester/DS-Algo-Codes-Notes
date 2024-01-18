/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
   // Initialize an array to represent the parent of each node
   const parent = Array(n)
      .fill(0)
      .map((_, index) => index);

   // Find function with path compression
   const find = (x) => {
      if (parent[x] === x) return x;
      return (parent[x] = find(parent[x]));
   };

   // Iterate through each node and validate the connections
   for (let i = 0; i < n; ++i) {
      // Check the right child connection
      if (rightChild[i] !== -1) {
         const rootU = find(i);
         const rootV = find(rightChild[i]);

         // Check for cycles and incorrect parent-child relationships
         if (rootU === rootV || rootV !== rightChild[i]) return false;

         // Perform union operation
         parent[rootV] = rootU;
      }

      // Check the left child connection
      if (leftChild[i] !== -1) {
         const rootU = find(i);
         const rootV = find(leftChild[i]);

         // Check for cycles and incorrect parent-child relationships
         if (rootU === rootV || rootV !== leftChild[i]) return false;

         // Perform union operation
         parent[rootV] = rootU;
      }
   }

   // Apply path compression to all nodes
   for (let i = 0; i < n; ++i) find(i);

   // Check the number of unique connected components
   const trees = new Set(parent).size;

   // The given connections form a valid binary tree if there is exactly one connected component
   return trees === 1;
};

/*
Explanation:
- The function uses Union-Find (Disjoint Set) with path compression and union by rank to validate binary tree connections.
- It iterates through each node and checks both left and right child connections.
- It performs union operations based on the connections provided and validates against cycles and incorrect parent-child relationships.
- After union operations, it applies path compression to all nodes for optimization.
- It checks the number of unique connected components using a Set.
- The given connections form a valid binary tree if there is exactly one connected component.

Time complexity: O(n)
Space complexity: O(n)
*/
