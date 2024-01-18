/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
   // Array to store whether a node is safe or not
   const dp = Array(rooms.length).fill(false);

   /**
    * Depth-First Search (DFS) function to recursively mark visited rooms.
    * @param {number} node - The current room/node being visited.
    */
   const dfs = (node) => {
      // If the room has already been visited, return
      if (dp[node]) {
         return;
      }
      dp[node] = true; // Mark the current room as visited

      // Recursively check the safety of each neighbor
      for (let neighbor of rooms[node]) {
         dfs(neighbor);
      }
   };

   dfs(0); // Start DFS from the first room
   return dp.every((node) => node === true); // Check if all rooms have been visited
};

// Time complexity: O(N + E), where N is the number of rooms and E is the total number of keys across all rooms.
// The DFS explores each room once, and for each room, it checks its neighbors (keys) once.
// Space complexity: O(N), where N is the number of rooms.
// The space is used for the dp array, which keeps track of whether a room has been visited.

/**
 * Alternative Code:
 * This alternative code uses a Breadth-First Search (BFS) approach.
 */

var canVisitAllRooms = function (rooms) {
   const visited = new Set();
   const queue = [0]; // Start from the first room

   while (queue.length > 0) {
      const currentRoom = queue.shift();
      visited.add(currentRoom);

      for (let neighbor of rooms[currentRoom]) {
         if (!visited.has(neighbor)) {
            queue.push(neighbor);
         }
      }
   }

   return visited.size === rooms.length;
};

/*
 * Alternative Code Explanation:
 * This alternative code uses a Breadth-First Search (BFS) approach to visit rooms.
 * It maintains a set 'visited' to keep track of visited rooms.
 * The BFS explores each room and adds its neighbors to the queue for further exploration.
 * The loop continues until all reachable rooms are visited.
 */

// Time complexity for the alternative code: O(N + E), where N is the number of rooms and E is the total number of keys across all rooms.
// Space complexity for the alternative code: O(N), where N is the number of rooms.
