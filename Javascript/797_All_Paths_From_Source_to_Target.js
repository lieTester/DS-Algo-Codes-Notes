/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
   const ans = [];

   // DFS function to explore all paths
   const dfs = (node, temp) => {
      // If the current node is the target, add the current path to the answer
      if (node === graph.length - 1) {
         ans.push([...temp]);
         return;
      }

      // Explore all neighbors of the current node
      for (let neighbor of graph[node]) {
         temp.push(neighbor);
         dfs(neighbor, temp);
         temp.pop();
      }
   };

   // Start DFS from the source (node 0) with an initial path [0]
   dfs(0, [0]);

   return ans;
};

// Time complexity: O(N * 2^N), where N is the number of nodes in the graph.
//   In the worst case, each node is part of all possible paths, leading to an exponential time complexity.
// Space complexity: O(N * 2^N) for the output paths, as all possible paths need to be stored.

// Explanation:
// - The DFS function explores all paths from the current node to the target node.
// - The base case checks if the current node is the target node, in which case the current path is added to the answer.
// - The loop iterates through all neighbors of the current node, extending the current path.

// Alternative Approach: Breadth-First Search (BFS)
// Another way to solve this problem is by using BFS to explore paths level by level.

// Time complexity for BFS: O(N * 2^N)
// Space complexity for BFS: O(N * 2^N)

// The DFS approach is often simpler to implement for this problem, but both approaches yield the same time and space complexity.
