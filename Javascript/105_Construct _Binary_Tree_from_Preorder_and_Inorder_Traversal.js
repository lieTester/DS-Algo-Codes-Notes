var buildTree = function (preorder, inorder) {
   // Recursive function to build the tree
   var dfs = (preStart, inStart, inEnd) => {
      // Base case: if the start of pre-order traversal exceeds its length or in-order traversal ends
      if (preStart === preorder.length || inStart > inEnd) {
         return null;
      }

      // Create a node using the current value from pre-order traversal
      var node = new TreeNode(preorder[preStart]);

      // Find the index of the current node's value in the in-order traversal
      var inIndex = inorder.indexOf(preorder[preStart]);

      // Recursive call for the left subtree
      node.left = dfs(preStart + 1, inStart, inIndex - 1);

      // Recursive call for the right subtree
      // Update pre-order start index by the count of elements in the left subtree
      node.right = dfs(preStart + (inIndex - inStart) + 1, inIndex + 1, inEnd);

      return node;
   };

   // Start the recursive function with appropriate indices for both traversals
   return dfs(0, 0, inorder.length - 1);
};

/**
 * 
 * Explanation:
 * The function buildTree uses a helper function dfs to construct the binary tree recursively.
 * The dfs function takes three parameters:
      -preStart: Represents the index in the pre-order traversal array.
      -inStart and inEnd: Represent the starting and ending indices in the in-order traversal array for the current subtree.
 * The base case checks if the pre-order index exceeds the length or if the in-order start index is greater than the end index.
 * It creates a node from the current value in the pre-order traversal.
 * It finds the index of the current node's value in the in-order traversal.
 * Recursively builds the left subtree using appropriate indices in both traversals.
 * Recursively builds the right subtree by adjusting the pre-order start index based on the number of elements in the left subtree.
 * Finally, it initiates the recursive process by calling dfs with the initial indices.
 */
