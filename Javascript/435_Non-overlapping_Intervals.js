/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
   // Sort intervals based on the end times in ascending order
   intervals.sort((a, b) => a[1] - b[1]);

   var lastInterval = intervals[0]; // Initialize with the first interval
   var nonOverlapCount = 1; // Number of non-overlapping intervals

   // Iterate through sorted intervals
   for (let i = 1; i < intervals.length; ++i) {
      // If the current interval overlaps with the last non-overlapping interval
      if (intervals[i][0] < lastInterval[1]) {
         // If the current interval is completely contained within the last non-overlapping interval
         if (
            intervals[i][0] >= lastInterval[0] &&
            intervals[i][1] <= lastInterval[1]
         ) {
            lastInterval = intervals[i];
         }
         // Otherwise, skip the current interval as it overlaps with the last non-overlapping interval
      } else {
         // If the current interval doesn't overlap, update lastInterval and increment nonOverlapCount
         ++nonOverlapCount;
         lastInterval = intervals[i];
      }
   }

   // The minimum number of intervals to remove is the total number of intervals minus non-overlapping intervals
   return intervals.length - nonOverlapCount;
};

// Time complexity: O(n log n) due to the sorting of intervals
// Space complexity: O(1) since the sorting is done in-place, and only constant extra space is used

// Explanation:
// 1. Sort the intervals based on their end times.
// 2. Initialize with the first interval and iterate through the sorted intervals.
// 3. If the current interval overlaps with the last non-overlapping interval, handle the overlap.
// 4. If the current interval doesn't overlap, update the lastInterval and increment the nonOverlapCount.
// 5. The minimum number of intervals to remove is the total number of intervals minus non-overlapping intervals.

// Alternative Approach:
// Another approach is to sort intervals based on their start times and then apply a greedy algorithm to find non-overlapping intervals.
// This alternative approach may have different code but would also have the same time and space complexity.
