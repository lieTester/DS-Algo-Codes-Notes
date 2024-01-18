var flatten = function (root) {
   // Define a recursive function to perform DFS
   function dfs(node) {
      if (!node) return null; // Base case: if the node is null, return null

      // Perform DFS on left and right subtrees
      const left = dfs(node.left); // Traverse left subtree
      const right = dfs(node.right); // Traverse right subtree

      if (left) {
         // If there's a left subtree
         const temp = node.right; // Store the right subtree temporarily
         node.right = node.left; // Move the left subtree to the right
         node.left = null; // Set the left pointer to null (as it's now on the right)

         // Find the rightmost node of the new right subtree
         let current = node.right;
         while (current.right) {
            current = current.right;
         }

         // Attach the original right subtree to the rightmost node of the new right subtree
         current.right = temp;
      }

      // Return the rightmost node of the current subtree
      // If right subtree exists, return it; if not, return the left; if neither, return the current node
      return right ? right : left ? left : node;
   }

   // Start the DFS from the root of the tree
   dfs(root);
};
