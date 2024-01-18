/**
 * @param {string[]} tokens - Array of strings representing Reverse Polish Notation (RPN) expression.
 * @return {number} - Result of evaluating the RPN expression.
 */
var evalRPN = function (tokens) {
   // Stack to store operands during evaluation
   const st = [];

   // Iterate through each token in the RPN expression
   for (let token of tokens) {
      // If the token is an operator ('/', '*', '+', '-'), perform the operation on the top two operands
      if (token === "/" || token === "*" || token === "+" || token === "-") {
         // Pop the top operand from the stack
         var temp = st.pop();

         // Perform the operation based on the operator
         if (token === "/") temp = parseInt(st.pop() / temp);
         else if (token === "*") temp = parseInt(st.pop() * temp);
         else if (token === "+") temp = parseInt(st.pop() + temp);
         else if (token === "-") temp = parseInt(st.pop() - temp);

         // Push the result back onto the stack
         st.push(temp);
      } else {
         // If the token is an operand, push it onto the stack after converting it to an integer
         st.push(parseInt(token));
      }
   }

   // The final result is at the top of the stack
   return st[0];
};

/*
Explanation:
The code evaluates a Reverse Polish Notation (RPN) expression using a stack. It iterates through each token in the expression,
and if the token is an operator, it performs the operation on the top two operands on the stack. If the token is an operand,
it is pushed onto the stack. The process continues until all tokens are processed, and the final result is obtained from the stack.

Time Complexity: O(N), where N is the number of tokens in the RPN expression. Each token is processed once.

Space Complexity: O(N), where N is the number of tokens in the RPN expression. The space is used for the stack.
*/
