#include <bits/stdc++.h>
using namespace std;
typedef vector<vector<int>> vvi;
typedef vector<vector<bool>> vvb;
typedef unordered_map<int, vector<pair<int, int>>> mvpi;

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
    // it's your code
    //  Hpos is vertical position in horizonatal plane
    //  kinf of tricky but not bad
    void dfs(TreeNode *root, int &lm, int &rm, int Hpos, int l, mvpi &tans)
    {
        if (root == nullptr)
            return;
        if (lm > Hpos)
            lm = Hpos;
        if (rm < Hpos)
            rm = Hpos;

        // we have to take care of position from left to right then, and then first values should of lower level in sorted fashion
        tans[Hpos].push_back({l, root->val});

        dfs(root->left, lm, rm, Hpos - 1, l + 1, tans);
        dfs(root->right, lm, rm, Hpos + 1, l + 1, tans);
    }
    vector<vector<int>> verticalTraversal(TreeNode *root)
    {
        mvpi tempans;
        int leftmost = 0;
        int rightmost = 0;
        dfs(root, leftmost, rightmost, 0, 0, tempans);

        vector<vector<int>> ans;
        vector<int> t;
        for (int i = leftmost; i <= rightmost; i++)
        {
            t.clear();
            if (tempans.count(i))
            {
                sort(begin(tempans[i]), end(tempans[i]));
                for (auto j : tempans[i])
                {
                    t.push_back(j.second);
                }
            }
            ans.push_back(t);
        }
        return ans;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    TreeNode *node5 = new TreeNode(7);
    TreeNode *node4 = new TreeNode(15);
    TreeNode *node3 = new TreeNode(20, node4, node5);
    TreeNode *node2 = new TreeNode(9);
    TreeNode *node1 = new TreeNode(3, node2, node3);

    auto t = obj.verticalTraversal(node1);

    return 0;
}