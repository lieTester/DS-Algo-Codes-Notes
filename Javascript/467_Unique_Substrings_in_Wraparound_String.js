/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function (s) {
   const memo = {}; // Memoization object to store the maximum length ending at each character
   let ans = 0; // Variable to store the final result
   let lengthSoFar = 0; // Variable to track the length of the current substring

   for (let i = 0; i < s.length; ++i) {
      // Check if the current character is consecutive to the previous one
      if (
         i > 0 &&
         ((s[i - 1] === "z" && s[i] === "a") ||
            s[i - 1].charCodeAt(0) + 1 === s[i].charCodeAt(0))
      ) {
         lengthSoFar++;
      } else {
         // If not consecutive, reset the length to 1
         lengthSoFar = 1;
      }

      const currentChar = s[i];

      // Subtract the previously stored count for the current character (if any)
      ans -= memo[currentChar] || 0;

      // Update the memoization with the maximum length for the current character
      memo[currentChar] = Math.max(memo[currentChar] || 0, lengthSoFar);

      // Add the updated count for the current character to the final result
      ans += memo[currentChar];
   }

   return ans;
};

// Time complexity: O(n) where n is the length of the input string
// Space complexity: O(1) since the memoization object has a constant number of entries (26 for lowercase letters)
// Explanation:
// The algorithm iterates through the input string once, maintaining the maximum length ending at each character.
// The memoization object is used to store and update the maximum length for each character.
// The final result is the sum of all maximum lengths for each character.

// Alternative approach:
// An alternative approach involves using an array instead of an object for memoization, which may have a constant size (26 for lowercase letters).
// Additionally, the algorithm can be modified to directly update the count without subtracting the previous count.
