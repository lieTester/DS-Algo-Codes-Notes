// Time complexity: O(log n) - Average case, as each step reduces 'n' by half
// Space complexity: O(log n) - Depth of recursion stack for memoization
// Explanation:
// The recursive 'helper' function calculates the minimum steps to reduce 'n' to 1.
// Memoization using 'memo' object stores the calculated steps to avoid redundant computations.
// The function 'helper' is called recursively for each number up to 'n'.

var integerReplacementMemo = function (n) {
   const memo = {};

   const helper = (num) => {
      if (num === 1) return 0;
      if (memo[num] !== undefined) return memo[num];

      if (num % 2 === 0) {
         memo[num] = 1 + helper(num / 2);
      } else {
         memo[num] = 1 + Math.min(helper(num - 1), helper(num + 1));
      }
      return memo[num];
   };

   return helper(n);
};

// Time complexity: O(log n) - Average case, as each step reduces 'n' by half
// Space complexity: O(1) - Constant space, no additional data structures used
// Explanation:
// This approach directly performs operations on 'n' based on its properties.
// For even numbers, it divides 'n' by 2.
// For odd numbers, it performs specific operations based on conditions for optimal reduction.

var integerReplacementMath = function (n) {
   let count = 0;
   while (n !== 1) {
      if (n % 2 === 0) {
         n /= 2;
      } else {
         if ((n + 1) % 4 === 0 && n !== 3) {
            n += 1;
         } else {
            n -= 1;
         }
      }
      count++;
   }
   return count;
};
