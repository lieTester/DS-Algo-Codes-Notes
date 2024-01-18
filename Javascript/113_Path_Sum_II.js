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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
   if (!root) return [];
   var ans = [];
   function dfs(node, temp, target) {
      if (node) {
         temp.push(node.val);
         if (node.left === node.right && target + node.val === targetSum)
            ans.push([...temp]);

         dfs(node.left, temp, target + node.val);
         dfs(node.right, temp, target + node.val);
         temp.pop();
         return;
      }
   }
   dfs(root, [], 0);
   return ans;
};

/**
 * 
 * 
 *                        |
                       |
                       v
  _________ var pathSum _________
 |                               |
 |      __________ function dfs __________
 |     |                                   |
 |     |   if (!node) return [];           return ans;
 |     |           |                         ^
 |     |           |                         |
 |     |           v                         |
 |     |      var ans = [];                 |
 |     |           |                         |
 |     |    function dfs(node, temp, target) {
 |     |        if (node) {                  |
 |     |            temp.push(node.val);     |
 |     |            if (node.left === node.right && (target + node.val) === targetSum)
 |     |                ans.push([...temp]);  // Found a valid path, add to answer
 |     |                                       |
 |     |            dfs(node.left, temp, target + node.val); // Explore left subtree
 |     |            dfs(node.right, temp, target + node.val); // Explore right subtree
 |     |            temp.pop(); // Remove the last element from temp
 |     |            return;    // Return from current recursion level
 |     |        }
 |     |    }
 |     |                               |
 |     |    dfs(root, [], 0);         |
 |     |                               |
 |     |    return ans;                |
 |     |_______________________________|
 | 

 */
