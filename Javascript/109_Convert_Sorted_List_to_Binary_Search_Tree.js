/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
   function dfs(head, tail) {
      var fast = head;
      var slow = head;
      if (head === tail) return null;

      while (fast !== tail && fast.next !== tail) {
         fast = fast.next.next;
         slow = slow.next;
      }
      var node = new TreeNode(slow.val);

      node.left = dfs(head, slow);
      node.right = dfs(slow.next, tail);
      return node;
   }
   return dfs(head, null);
};

/**
                            |
                            |
                            v
  _________ var sortedListToBST _________
 |                                        |
 |          ________ function dfs _______ |
 |         |                            | |
 |         |                            | |
 |     var fast = head;             return node;
 |     var slow = head;                  ^
 |     if (head === tail) return null;   |
 |        |                    |          |
 |        |____________________|__________|
 |                    |
 |                    |
 |        while (fast !== tail && fast.next !== tail) {
 |            fast = fast.next.next; // Move two steps
 |            slow = slow.next;      // Move one step
 |        }                         // (Finding the middle of the list)
 |              |
 |        var node = new TreeNode(slow.val); // Create a new tree node with the middle value
 |              |
 |        node.left = dfs(head, slow);      // Recursively build the left subtree
 |        node.right = dfs(slow.next, tail); // Recursively build the right subtree
 |              |
 |        return node; // Return the current subtree
 |              |
 |________________|

 * The function 'sortedListToBST' takes the head of a sorted linked list as input.
 * Inside this function, there's a nested function dfs (depth-first search) which takes two parameters: head and tail.
 * The dfs function works recursively to build the BST. It uses a two-pointer technique (fast and slow pointers) to find the middle element of the linked list between head and tail.
 * Initially, head points to the start of the linked list, and tail points to null. The base case checks if head equals tail, indicating an empty section of the list, returning null.
 * The fast pointer (fast) moves two steps at a time, while the slow pointer (slow) moves one step at a time. This helps find the middle node of the linked list.
 * Once the middle node is found, a new TreeNode is created with the val set to the value of the middle node.
 * The left subtree of the new node is built by recursively calling dfs with head and slow, effectively dividing the list into two halves, the left half being the elements before the middle node.
 * The right subtree of the new node is built by recursively calling dfs with slow.next and tail, capturing elements after the middle node.
 * The process continues until all nodes of the linked list are processed and the BST is constructed.
 * Finally, the dfs function returns the constructed BST.
 * This code employs a divide-and-conquer approach by finding the middle element to ensure that the BST remains balanced during construction from the sorted linked list.
 */
