/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
   let ans = 0;
   function dfs(node, val) {
      if (!node) return;

      val = val * 10 + node.val;
      if (!node.left && !node.right) {
         ans += val;
         return;
      }

      dfs(node.left, val);
      dfs(node.right, val);
   }
   dfs(root, 0);
   return ans;
};
