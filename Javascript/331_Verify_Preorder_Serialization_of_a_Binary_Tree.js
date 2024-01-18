/**
 * @param {string} preorder
 * @return {boolean}
 */

var iterative = function (preorder) {
   var indx = 1; // Initialize the index for traversal

   // Iterate through the preorder array
   for (let i = 0; i < preorder.length; ++i) {
      --indx; // Decrement the index

      // If the index becomes negative, it means the tree structure is invalid
      if (indx < 0) return false;

      // Increment the index by 2 if the node is not a null node ("#")
      if (preorder[i] !== "#") indx += 2;
   }

   // If the index reaches 0 at the end, it means the tree structure is valid
   return indx === 0;
};

var recursive = function (preorder) {
   var indx = 0; // Initialize the index for traversal
   function dfs() {
      if (indx >= preorder.length) return false; // If index exceeds array length, it's invalid

      if (preorder[indx] === "#") return true; // If it's a null node, return true

      ++indx; // Move to the next node
      var l = dfs(); // Recursively check the left subtree
      ++indx; // Move to the right subtree
      var r = dfs(); // Recursively check the right subtree

      return l && r; // Return true if both left and right subtrees are valid
   }

   // Call the recursive function and validate the index position
   return dfs() && indx === preorder.length - 1;
};

var isValidSerialization = function (preorder) {
   preorder = preorder.split(","); // Split the preorder string by comma

   return recursive(preorder);
   return iterative(preorder);
};
