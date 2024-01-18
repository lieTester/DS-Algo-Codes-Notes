/**
 * Code:
 * An  union-find (disjoint set) approach.
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
   const parent = {};

   const find = (x) => {
      if (parent[x] === undefined) parent[x] = x;
      while (x !== parent[x]) x = parent[x];
      return x;
   };

   const union = (x, y) => {
      const rootX = find(x);
      const rootY = find(y);
      if (rootX !== rootY) parent[rootX] = rootY;
   };

   // Union stones in the same row and column
   for (let [x, y] of stones) {
      union(x, ~y); // ~y represents a different axis (to distinguish rows and columns)
   }

   const components = new Set();

   // Count the number of connected components
   for (let [x, y] of stones) {
      components.add(find(x));
   }

   // Calculate the number of stones to be removed to keep one stone in each connected component
   const result = stones.length - components.size;
   return result;
};

// Explanation:
// The  code uses a union-find (disjoint set) approach to determine connected components.
// Each stone is represented by a node, and union-find operations are performed based on stones'
// row and column information. The algorithm counts the number of connected components and returns
// the total number of stones minus the number of components. This gives the minimum number of stones
// to be removed to have one stone in each connected component.

// Time complexity: O(N * α(N)), where N is the number of stones and α(N) is the inverse Ackermann function.
// Space complexity: O(N), where N is the number of stones. The parent array stores information about each stone.

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
   const graph = new Map();

   // Build the graph
   for (let [x, y] of stones) {
      if (!graph.has(x)) graph.set(x, []);
      if (!graph.has(~y)) graph.set(~y, []);

      graph.get(x).push(~y); // ~y represents a different axis (to distinguish rows and columns)
      graph.get(~y).push(x);
   }

   let components = 0;

   const dfs = (node) => {
      if (!graph.has(node)) return;

      for (let neighbor of graph.get(node)) {
         if (!visited.has(neighbor)) {
            visited.add(neighbor);
            dfs(neighbor);
         }
      }
   };

   const visited = new Set();

   // Count the number of connected components
   for (let [node] of graph) {
      if (!visited.has(node)) {
         visited.add(node);
         dfs(node);
         components++;
      }
   }

   // Calculate the number of stones to be removed to keep one stone in each connected component
   const result = stones.length - components;
   return result;
};

// Explanation:
// The code uses depth-first search (DFS) to find connected components in a graph formed by stones.
// Each stone is represented as a node, and edges connect stones with the same row or column.
// The algorithm counts the number of connected components and returns the total number of stones minus
// the number of components. This gives the minimum number of stones to be removed to have one stone
// in each connected component.

// Time complexity: O(N), where N is the number of stones. Each stone is visited once.
// Space complexity: O(N), where N is the number of stones. The graph and visited set store information about each stone.
