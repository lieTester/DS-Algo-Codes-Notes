// { Driver Code Starts
#include <bits/stdc++.h>
using namespace std;
// matrix chain multiplication question
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
    vector<TreeNode *> fbt(int n, vector<vector<TreeNode *>> &dp)
    {

        if (n == 1)
            return {new TreeNode(0)};
        if (dp[n].size())
            return dp[n];
        vector<TreeNode *> ans;
        vector<TreeNode *> l, r;

        for (int i = 1; i < n; i += 2)
        {
            l = fbt(i, dp);
            r = fbt(n - i - 1, dp);
            for (auto itr : r)
            {
                for (auto itl : l)
                {
                    ans.push_back(new TreeNode(0, itr, itl));
                }
            }
        }
        return dp[n] = ans;
    }
    vector<TreeNode *> allPossibleFBT(int n)
    {
        if (n & 1 == 0)
            return {};
        vector<vector<TreeNode *>> dp(n + 1);
        return fbt(n, dp);
    }
};
int main()
{

#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif

    Solution obj;

    auto t = obj.allPossibleFBT(7);

    return 0;
}
// } Driver Code Ends