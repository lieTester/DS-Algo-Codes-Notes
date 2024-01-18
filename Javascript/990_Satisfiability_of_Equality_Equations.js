/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
   // Initialize parent array for union-find data structure
   const parent = {};

   // Find function for union-find with path compression
   const find = (x) => {
      if (parent[x] === undefined) return (parent[x] = x);
      if (parent[x] === x) return x;
      return (parent[x] = find(parent[x]));
   };

   // Union operation for elements with equality
   for (let node of equations) {
      if (node[1] === "=") {
         parent[find(node[0])] = parent[find(node[3])];
      }
   }

   // Check if elements with inequality have different parents
   for (let node of equations) {
      if (node[1] === "!" && find(node[0]) === find(node[3])) {
         return false;
      }
   }

   return true;
};

/*
Explanation:
- The code uses a union-find data structure to represent disjoint sets.
- The find function implements path compression to find the parent of a node.
- The first loop iterates through equations with equality and performs union operations.
- The second loop checks equations with inequality to ensure elements don't belong to the same set.
- If any equality contradicts an inequality, it returns false; otherwise, it returns true.
*/

// Time complexity: O(N * α(N)), where α(N) is the inverse Ackermann function.
// The time complexity is mainly determined by the find operation with path compression.
// The inverse Ackermann function is extremely slow-growing and can be considered as constant.

// Space complexity: O(N), where N is the number of unique variables in equations.
// The space complexity is determined by the parent array in the union-find data structure.
