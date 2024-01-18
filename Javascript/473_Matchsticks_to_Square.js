/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
   var total = matchsticks.reduce((total, num) => total + num, 0);
   if (total % 4 !== 0) return false; // If the total sum cannot be divided into 4 equal sides, return false

   const sideLength = total / 4; // Each side of the square should have this length
   const sides = new Array(4).fill(0); // To keep track of the current lengths of the four sides

   matchsticks.sort((a, b) => b - a); // Sort matchsticks in descending order for efficient backtracking

   const dfs = (index) => {
      // If all matchsticks are used and all sides are of equal length, a square is possible
      if (index === matchsticks.length) {
         return sides.every((side) => side === sideLength);
      }

      for (let i = 0; i < 4; i++) {
         // If adding the current matchstick to the current side doesn't exceed the side length
         if (sides[i] + matchsticks[index] <= sideLength) {
            sides[i] += matchsticks[index]; // Add the matchstick to the current side
            if (dfs(index + 1)) return true; // Recursively move to the next matchstick
            sides[i] -= matchsticks[index]; // Backtrack: Remove the matchstick from the side
         }
      }

      return false; // If no side accommodates the matchstick, return false
   };

   return dfs(0); // Start the DFS from the first matchstick
};

// Time complexity: O(4^N) - N is the number of matchsticks. The function explores 4 branches (for 4 sides) at each step.
// Space complexity: O(N) - The recursion stack can go up to the depth of the number of matchsticks.
// Explanation:
// The algorithm uses backtracking (DFS) to try different combinations of matchsticks to form the sides of the square.
// It checks if adding each matchstick to one of the four sides keeps the side length within limits.
// If all matchsticks are used and all sides are of equal length, it returns true, otherwise false.

// Alternative approaches could involve dynamic programming or bitmasking to optimize the solution.
// Dynamic programming can be used to memoize the state of the sides and reduce redundant computations.
// Bitmasking can represent the state of matchsticks used in a more efficient manner, reducing memory usage.
