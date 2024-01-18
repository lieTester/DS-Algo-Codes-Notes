/**
 * @param {number[][]} times - Array representing directed edges with weights.
 * @param {number} n - Number of nodes in the network.
 * @param {number} k - Source node.
 * @return {number} - Time taken for the signal to reach all nodes, or -1 if it's impossible.
 */
var networkDelayTime = function (times, n, k) {
   // Create an adjacency list to represent the directed graph.
   const graph = Array(n)
      .fill(-1)
      .map(() => []);
   for (const [u, v, w] of times) {
      graph[u - 1].push([v - 1, w]);
   }

   // Initialize an array to store the minimum distance from the source node to each node.
   const distance = Array(n).fill(Infinity);

   // Initialize a queue for BFS traversal, starting with the source node and time 0.
   const queue = [];
   queue.push([k - 1, 0]);

   while (queue.length) {
      var [node, time] = queue.shift();

      // Skip if the calculated distance is already less than or equal to the current time.
      if (distance[node] <= time) {
         continue;
      }

      // Update the distance for the current node.
      distance[node] = time;

      // Explore neighbors and add them to the queue with updated time.
      for (let [curr, currTime] of graph[node]) {
         queue.push([curr, time + currTime]);
      }
   }

   // Find the maximum time in the distance array, representing the time taken for the signal to reach all nodes.
   const maxTime = Math.max(...distance);

   // Return -1 if any node is unreachable, otherwise return the maximum time.
   return maxTime === Infinity ? -1 : maxTime;
};

/*
Explanation:
The code uses Breadth-First Search (BFS) to traverse the graph starting from the source node (k). It updates the minimum distance to each node
while exploring the edges. The final result is the maximum distance in the distance array, representing the time taken for the signal to reach all nodes.

Time Complexity: O(N + E), where N is the number of nodes and E is the number of edges. The loop processes each node and edge at most once.

Space Complexity: O(N), where N is the number of nodes. The space is used for the graph, distance array, and queue.
*/

/**
 * TLE DFS
 */
var networkDelayTime = function (times, n, k) {
   times.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      return a[0] - b[0];
   });
   const graph = new Map();
   for (const [u, v, w] of times) {
      if (!graph.has(u)) {
         graph.set(u, []);
      }
      graph.get(u).push([v, w]);
   }

   const visited = Array(n + 1).fill(false);
   const distances = Array(n + 1).fill(Infinity);

   const dfs = (node, time) => {
      if (visited[node]) {
         return;
      }

      visited[node] = true;
      distances[node] = Math.min(distances[node], time);

      if (graph.has(node)) {
         for (const [neighbor, edgeTime] of graph.get(node)) {
            dfs(neighbor, time + edgeTime);
         }
      }

      visited[node] = false;
   };

   dfs(k, 0);

   const maxTime = Math.max(...distances.slice(1));
   return maxTime === Infinity ? -1 : maxTime;
};
