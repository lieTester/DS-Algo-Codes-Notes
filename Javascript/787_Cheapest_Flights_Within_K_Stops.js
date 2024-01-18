/**
 * @param {number} n - The number of cities.
 * @param {number[][]} flights - An array representing flights between cities with their costs.
 * @param {number} src - The source city.
 * @param {number} dst - The destination city.
 * @param {number} k - The maximum number of stops allowed.
 * @return {number} - The cheapest price from src to dst with at most k stops.
 */

var findCheapestPrice = function (n, flights, src, dst, k) {
   // Create an adjacency list to represent the graph.
   const graph = Array(n)
      .fill(null)
      .map(() => []);

   // Build the graph based on the flights.
   for (let [u, v, cost] of flights) {
      graph[u].push([v, cost]);
   }

   // Initialize the array with [cost, node, stops] as the structure.
   const que = [];

   // Use a costs array to track the minimum cost to each node at the current number of stops.
   const costs = Array(n).fill(Infinity);
   costs[src] = 0;

   // Push the source node with cost 0 and k stops.
   que.push([0, src, k]);

   while (que.length) {
      const [cost, node, stops] = que.shift();

      // If the current node is the destination, return the cost.
      if (node === dst) {
         continue;
      }

      // If the remaining stops are greater than or equal to 0, explore neighbors.
      if (stops >= 0 && graph[node]) {
         for (let [next, nextCost] of graph[node]) {
            const newCost = cost + nextCost;

            // Update the costs array if the new cost is smaller.
            if (newCost < costs[next]) {
               costs[next] = newCost;
               que.push([newCost, next, stops - 1]);
            }
         }
      }
   }

   // If the destination is reached, return the minimum cost. Otherwise, return -1.
   if (costs[dst] !== Infinity) return costs[dst];
   return -1;
};

/*
Explanation:
The code uses a BFS-like approach with a queue to explore possible flights from the source to the destination with at most k stops.
It maintains an array 'costs' to track the minimum cost to each node at the current number of stops. The algorithm iteratively explores
neighbors, updating the cost and the number of stops if a cheaper route is found. The result is the minimum cost to reach the destination
within the given constraints.

Time Complexity: O(E * k), where E is the number of edges (flights). In the worst case, all possible routes with up to k stops need to be explored.

Space Complexity: O(V + E), where V is the number of vertices (cities) and E is the number of edges (flights). The space is used for the graph
(adjacency list), the costs array, and the queue.

*/

/**
 * @param {number} n - The number of cities.
 * @param {number[][]} flights - An array representing flights between cities with their costs.
 * @param {number} src - The source city.
 * @param {number} dst - The destination city.
 * @param {number} k - The maximum number of stops allowed.
 * @return {number} - The cheapest price from src to dst with at most k stops.
 */

var findCheapestPriceAlternative = function (n, flights, src, dst, k) {
   const MAX_VALUE = 1e9; // A large value representing infinity for initializations

   // Initialize the distance array with Infinity for all nodes except the source
   const distances = Array(n).fill(MAX_VALUE);
   distances[src] = 0;

   // Relax edges for k rounds
   for (let round = 0; round <= k; round++) {
      const updatedDistances = [...distances];

      for (let [u, v, cost] of flights) {
         if (
            distances[u] !== MAX_VALUE &&
            distances[u] + cost < updatedDistances[v]
         ) {
            updatedDistances[v] = distances[u] + cost;
         }
      }

      distances.splice(0, distances.length, ...updatedDistances);
   }

   // Return the minimum cost to reach the destination
   return distances[dst] !== MAX_VALUE ? distances[dst] : -1;
};

/*
Explanation (Alternative Code):
The alternative approach uses the Bellman-Ford algorithm to find the minimum cost with at most k stops.
The algorithm iteratively relaxes the edges for k rounds, updating the cost to each node. The result
is the minimum cost to reach the destination within the given constraints.

Time Complexity: O(E * k), where E is the number of edges (flights).

Space Complexity: O(V), where V is the number of vertices (cities). The space is used for the distances array.
*/
