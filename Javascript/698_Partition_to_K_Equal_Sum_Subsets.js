/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
   if (k === 1) return true; // If only one subset is required, any array can be considered a valid partition
   var total = nums.reduce((total, num) => total + num, 0);
   if (total % k !== 0) return false; // If the total sum cannot be divided into 'k' equal subsets, return false

   const sideLength = total / k; // Each subset should have this sum
   const sides = new Array(k).fill(0); // To keep track of the current sums of the subsets

   nums.sort((a, b) => b - a); // Sort nums in descending order for efficient backtracking

   const dfs = (index) => {
      // If all nums are used and all subsets have equal sums, a valid partition is possible
      if (index === nums.length) {
         return sides.every((side) => side === sideLength);
      }
      console.log(sides);
      for (let i = 0; i < k; i++) {
         // If adding the current element to the current subset doesn't exceed the required sum
         if (sides[i] + nums[index] <= sideLength) {
            sides[i] += nums[index]; // Add the element to the current subset
            if (dfs(index + 1)) return true; // Recursively move to the next element
            sides[i] -= nums[index]; // Backtrack: Remove the element from the subset
            // Prune unnecessary branches:
            // If the current side is empty, subsequent sides will also be empty,
            // so we can break out of the loop to avoid unnecessary recursion.
            if (sides[i] === 0) break;
         }
      }

      return false; // If no subset accommodates the element, return false
   };

   return dfs(0); // Start the DFS from the first element
};

// Time complexity: O(k^(N-k) * k!), where N is the length of the 'nums' array
// Space complexity: O(k), where k is the number of subsets

/*
Explanation:
- The code uses a backtracking approach to try different combinations of elements in 'nums' to form 'k' equal subsets.
- It recursively explores all possible combinations and checks if each subset's sum is equal to 'sideLength'.
- Sorting the 'nums' array in descending order optimizes the backtracking process.
- The 'sides' array keeps track of the current sum of each subset during the exploration.
- The time complexity is high due to the exponential nature of the backtracking approach.
- There are more efficient algorithms to solve this problem, such as dynamic programming or bitmasking.
*/
