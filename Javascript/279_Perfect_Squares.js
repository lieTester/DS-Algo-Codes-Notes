// Solution 1: Dynamic Programming (Optimized)
// Time Complexity: O(n*sqrt(n)) because of the nested loops.
// Space Complexity: O(n) for the dp array.

var numSquares = function (n) {
   const dp = Array(n + 1).fill(Infinity); // Create an array to store minimum squares
   dp[0] = 0; // Base case: minimum squares for 0 is 0

   for (let i = 1; i <= n; i++) {
      for (let j = 1; j * j <= i; j++) {
         dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // Update minimum squares
      }
   }

   return dp[n]; // Return the minimum squares for n
};

// Solution 2: Breadth-First Search (BFS)
// Time Complexity: In the worst case, it is O(n^(3/2)) because there can be a maximum of O(n) numbers in the queue, and for each number, we check at most O(sqrt(n)) perfect squares.
// Space Complexity: O(n) for the queue and O(sqrt(n)) for the perfectSquares array.

var numSquares = function (n) {
   const perfectSquares = []; // Store perfect squares up to n
   for (let i = 1; i * i <= n; i++) {
      perfectSquares.push(i * i);
   }

   const queue = [n]; // Initialize a queue with the target number
   let level = 0; // Tracks the number of levels (minimum squares)

   while (queue.length > 0) {
      // BFS until the queue is empty
      level++;
      const size = queue.length;

      for (let i = 0; i < size; i++) {
         const curr = queue.shift(); // Dequeue the current number

         for (const square of perfectSquares) {
            const diff = curr - square; // Calculate the difference

            if (diff === 0) {
               return level; // Found the minimum number of squares
            } else if (diff < 0) {
               break; // Stop if the difference becomes negative
            } else {
               queue.push(diff); // Enqueue the difference
            }
         }
      }
   }

   return -1; // Couldn't find a perfect square sum for n
};

// Solution 3: Mathematics (Lagrange's Four Square Theorem)
// Time Complexity: O(sqrt(n)) due to the loop checking for perfect squares.
// Space Complexity: O(1) as no extra space is used besides the input and some variables.
var numSquares = function (n) {
   const isSquare = (num) => Math.sqrt(num) % 1 === 0; // Function to check perfect squares

   if (isSquare(n)) return 1; // If n is a perfect square, return 1

   while (n % 4 === 0) {
      n /= 4; // Reduce n if it's divisible by 4
   }
   if (n % 8 === 7) return 4; // Return 4 if n is of the form 4^k * (8m + 7)

   for (let i = 1; i * i <= n; i++) {
      if (isSquare(n - i * i)) return 2; // Return 2 if the sum of squares results in a perfect square
   }

   return 3; // Return 3 by elimination (Lagrange's theorem)
};
