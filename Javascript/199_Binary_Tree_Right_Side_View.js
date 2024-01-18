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
 * @return {number[]}
 */
var rightSideView = function (root) {
   var holder = [];
   function dfs(node, h) {
      if (!node) return;
      if (holder.length === h) holder.push(0);

      holder[h] = node.val;
      dfs(node.left, h + 1);
      dfs(node.right, h + 1);
   }
   dfs(root, 0);

   return holder;
};
