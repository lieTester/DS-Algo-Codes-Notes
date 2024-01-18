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
   var ans = null;
   function dfs(node) {
      if (!node) return false;

      if (node.val === p.val || node.val === q.val) {
         ans = node;
         return true;
      }
      var left = dfs(node.left);
      var right = dfs(node.right);
      if (left && right) {
         ans = node;
         return true;
      }
      return left || right;
   }
   dfs(root);
   return ans;
};
