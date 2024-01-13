#include <bits/stdc++.h>
using namespace std;
struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
class Solution
{
public:
    int maxm;
    int help(TreeNode *root, int val)
    {
        if (root == nullptr)
            return 0;
        int l = 0, r = 0;
        if (root->val != val)
        {

            l = help(root->left, root->val);
            r = help(root->right, root->val);
            maxm = max(maxm, l + r);
            return 0;
        }

        l = help(root->left, val);
        r = help(root->right, val);
        // total duplicate values in l+r or l+1 or r+1
        // duplicate means total similar values in path -1
        maxm = max(maxm, max(l + r, max(l + 1, r + 1)));

        return max(r, l) + 1;
    }

    int longestUnivaluePath(TreeNode *root)
    {
        maxm = 0;
        int temp = help(root, -1001);
        return maxm;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    TreeNode *node5 = new TreeNode(5);
    TreeNode *node4 = new TreeNode(1);
    TreeNode *node3 = new TreeNode(1);
    TreeNode *node2 = new TreeNode(5, nullptr, node5);
    TreeNode *node1 = new TreeNode(4, node3, node4);
    TreeNode *node0 = new TreeNode(5, node1, node2);
    Solution obj;
    auto t = obj.longestUnivaluePath(node0);
    return 0;
}