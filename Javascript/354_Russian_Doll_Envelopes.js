/**
 * @param {number[][]} envelopes
 * @return {number}
 * Sorting step: O(n log n) where n is the number of envelopes
 * Iterating through envelopes and performing binary search: O(n log n)
 * Total Time Complexity: O(n log n)
 * Additional space for the dp array: O(n) where n is the number of envelopes
 */

var maxEnvelopes = function (envelopes) {
   // Sorting envelopes by width in ascending order
   // If widths are equal, sort by height in descending order
   envelopes.sort((a, b) => {
      if (a[0] !== b[0]) {
         return a[0] - b[0]; // Sort by width in ascending order
      } else {
         return b[1] - a[1]; // Sort by height in descending order
      }
   });

   // Initialize an empty array to store potential envelopes for nesting
   const dp = [];

   // Iterate through each envelope in the sorted order
   for (const envelope of envelopes) {
      let left = 0;
      let right = dp.length;

      // Binary search within dp array to find a suitable position
      // for the current envelope based on its height
      while (left < right) {
         const mid = Math.floor((left + right) / 2);
         if (dp[mid][1] < envelope[1]) {
            left = mid + 1; // Move right in search for higher height
         } else {
            right = mid; // Move left in search for lower height
         }
      }

      // Outputting for better understanding of the process
      console.log("DP Array:", dp);
      console.log("Left Index:", left);
      console.log("Current Envelope:", envelope);

      // If left exceeds the current dp length, push the envelope to dp array
      // Otherwise, update the envelope at the left index in the dp array
      if (left >= dp.length) {
         dp.push(envelope);
      } else {
         dp[left] = envelope;
      }
   }

   // Return the length of the dp array, representing the maximum number
   // of nested envelopes
   return dp.length;
};

/*
Consider an example array of envelopes: `[[5, 4], [6, 7], [6, 4], [2, 3]]`.

The sorting function compares the envelopes based on their widths and heights. Here's how it sorts them:

1.  **Sort by Widths (Ascending Order):**
    
    *   Initially, sort the envelopes by their widths in ascending order (`a[0] - b[0]`). This step rearranges the envelopes based on their widths:
    
    `[ [2, 3], [5, 4], [6, 7], [6, 4] ]`
    
    Envelopes with lower widths come before envelopes with higher widths.
    
2.  **Sort by Heights (Descending Order) if Widths are Equal:**
    
    *   For envelopes that have the same width, sort them by their heights in descending order (`b[1] - a[1]`). This ensures that envelopes with the same width are ordered by their heights in reverse:
    
    After the secondary sorting by height:
    
    `[ [2, 3], [6, 7], [6, 4], [5, 4] ]`
    
    Within the envelopes of equal widths, the one with the highest height comes first. This step is crucial for identifying the nesting sequence because when considering envelopes with equal widths, we prioritize the taller ones.
    

The final sorted array becomes `[[2, 3], [6, 7], [6, 4], [5, 4]]`. This sorted sequence serves as the starting point for the nesting algorithm.

Now, with this sorted sequence, the code proceeds to determine the maximum number of envelopes that can be nested inside one another based on their widths and heights. The binary search and insertion/update in the `dp` array follow this sorted sequence to accurately identify the nesting order while considering both width and height constraints for each envelope.

This sorting mechanism ensures that envelopes are organized by their widths first and then, within the same width category, by their heights in a way that helps maximize the nesting possibilities based on the specified constraints of the problem.
*/
