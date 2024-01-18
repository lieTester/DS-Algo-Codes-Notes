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
 */
var BSTIterator = function (root) {
   this.inorder = [];
   this.itr = 0;
   var dfs = (node) => {
      if (node) {
         dfs(node.left);
         this.inorder.push(node.val);
         dfs(node.right);
      }
   };
   dfs(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
   if (this.itr < this.inorder.length) return this.inorder[this.itr++];
   return -1;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
   if (this.itr < this.inorder.length) return true;
   return false;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
