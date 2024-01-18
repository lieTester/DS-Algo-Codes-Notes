/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
   var holder = [];
   function dfs(node, h) {
      if (!node) return;
      if (holder.length === h) holder.push(node);
      else {
         holder[h].next = node;
         holder[h] = node;
      }
      dfs(node.left, h + 1);
      dfs(node.right, h + 1);
   }
   dfs(root, 0);
   for (let node in holder) node.next = null;
   return root;
};
