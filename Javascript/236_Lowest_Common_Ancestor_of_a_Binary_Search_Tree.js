/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
   function dfs(node) {
      if (!node) return null;

      if (node.val === p.val || node.val === q.val) {
         return node;
      }
      var left = dfs(node.left);
      var right = dfs(node.right);
      if (left && right) return node;

      return left || right;
   }

   return dfs(root);
};
