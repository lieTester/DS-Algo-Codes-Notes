/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
   var str = []; // Stack to store indices of '*'
   var brk = []; // Stack to store indices of '('

   for (let i = 0; i < s.length; ++i) {
      if (s[i] === "(") {
         brk.push(i); // Store the index of '(' in the brk stack
      } else if (s[i] === "*") {
         str.push(i); // Store the index of '*' in the str stack
      } else {
         if (brk.length) {
            brk.pop(); // Match ')' with '(' if possible
         } else if (str.length) {
            str.shift(); // If no '(', use '*' as '('
         } else {
            return false; // No matching '(' or '*' found
         }
      }
   }

   while (brk.length) {
      if (str.length) {
         if (str[0] > brk[0]) {
            brk.shift(); // If '*' index is after '(' index, match them
         }
         str.shift(); // In any case, consume '*' as '(' or discard extra '*'
         continue;
      }
      return false; // If no '*' is available to match '('
   }
   return true; // All '(' matched with either '(' or '*' successfully
};

// Time complexity: O(n), where n is the length of the input string 's'
// Space complexity: O(n) in the worst case for the two stacks 'str' and 'brk'

// Explanation:
// - This function uses two stacks, 'str' and 'brk', to keep track of indices of '*' and '(' respectively.
// - It iterates through the input string 's', pushing indices of '(' and '*' into respective stacks.
// - When encountering a ')', it tries to match it with a '(' if available, otherwise with a '*'.
// - The while loop handles remaining '(' in the 'brk' stack and tries to match them with '*' in the 'str' stack.
// - If the closing brackets can be matched with corresponding opening brackets or '*' appropriately, it returns true; otherwise, false.

// An alternative approach might involve using a single stack and backtracking to explore all possibilities.
// This can be done using recursion or a backtracking algorithm to check different combinations of '(' and ')'.
// Such an approach might have a higher time complexity but can cover all possible combinations.
