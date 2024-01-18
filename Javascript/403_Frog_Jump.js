/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canCross = function (nums) {
   const n = nums.length;
   const memo = new Array(n).fill(null).map(() => new Array(n).fill(false));

   const dfs = (indx, unit) => {
      // Base case: If the index reaches the last stone or beyond, return true.
      if (indx >= n - 1) {
         return true;
      }

      // If the current stone and unit are already visited and failed, return false.
      if (memo[indx][unit]) {
         return false;
      }

      let result = false;

      // Check possible jumps from the current stone to the next stones.
      for (let i = indx + 1; i < n; ++i) {
         let dist = nums[i] - nums[indx];

         // Early exit if the frog can't reach this stone with the current unit.
         if (result || dist > unit + 1) {
            break;
         }

         // Check if the frog can jump based on the given conditions (unit +/- 1).
         if (unit + 1 === dist || unit === dist || unit - 1 === dist) {
            result |= dfs(i, dist); // Perform DFS for valid jumps.
         }
      }

      // Mark the current stone and unit as visited.
      memo[indx][unit] = true;

      return result; // Return whether the frog could cross the river.
   };

   return dfs(0, 0); // Start DFS from the first stone with 0 unit distance.
};

// Time complexity: O(n^2), where 'n' is the length of the input array 'nums'.
// Space complexity: O(n^2), due to the 'memo' array storing results for each stone and unit.
// Explanation:
// The code uses DFS with memoization to check all possible jumps the frog can make from each stone.
// The 'dfs' function explores possible jumps based on the rules (unit +/- 1) and marks visited stones.
// Memoization with the 'memo' array prevents redundant DFS calls, improving performance.
// The function returns whether the frog can successfully cross the river.
