/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
   var count = 0; // Counter for the length of arithmetic slices
   var ans = 0; // Total count of arithmetic slices

   // Iterate through the array starting from index 2
   for (let i = 2; i < nums.length; ++i) {
      // Check if the current sequence forms an arithmetic slice
      if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
         ++count; // Increment the count for the current slice
      } else {
         // If the sequence doesn't form an arithmetic slice, calculate and add slices to the total count
         if (count > 0) {
            ans += parseInt((count * (count + 1)) / 2); // Calculate slices using the arithmetic series formula
         }
         count = 0; // Reset the count for the next sequence
      }
   }

   // Calculate and add slices to the total count for the remaining sequence
   if (count > 0) {
      ans += parseInt((count * (count + 1)) / 2);
   }

   return ans; // Return the total count of arithmetic slices
};

// Time complexity: O(n)
// The function iterates through the 'nums' array once, where 'n' is the length of the array.
// Space complexity: O(1)
// The function uses a constant amount of extra space regardless of the input size.

// Explanation:
// The function traverses the 'nums' array and checks if consecutive elements form an arithmetic sequence.
// The 'count' variable tracks the length of each arithmetic slice.
// When a slice ends, the function calculates the number of slices using the formula (count * (count + 1)) / 2,
// adding it to the 'ans' variable, which accumulates the total count of arithmetic slices.
// The final 'ans' is returned as the total count of arithmetic slices in the 'nums' array.
