#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    bool dfs(vector<vector<int>> &adj, vector<bool> &vis, int node)
    {
        if (node >= adj.size() || node == -1)
            return true;
        if (vis[node])
            return false;
        vis[node] = true;
        for (int i : adj[node])
        {
            if (dfs(adj, vis, i) == false)
                return false;
        }
        return true;
    }

    bool validateBinaryTreeNodes(int n, vector<int> lc, vector<int> rc)
    {
        if (n < 2)
            return true;
        vector<vector<int>> adj(n);
        vector<bool> vis(n, false);
        vector<int> indeg(n, 0);

        for (int i = 0; i < n; ++i)
        {
            if (lc[i] != -1)
                adj[i].push_back(lc[i]);
            if (rc[i] != -1)
                adj[i].push_back(rc[i]);
            if (lc[i] != -1)
                indeg[lc[i]]++;
            if (rc[i] != -1)
                indeg[rc[i]]++;
        }

        for (int i = 0; i < n; ++i)
        {
            // call dfs where indegree of node is zero and atleast one child
            // why? because 0 indegree can only be root node
            if (indeg[i] == 0 && adj[i].size() > 0)
            {
                if (dfs(adj, vis, i) == false)
                    return false;
                else
                    break;
            }
        }
        for (int i = 0; i < n; ++i)
        {
            if (vis[i] == false)
                return false;
        }
        return true;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    auto ans = obj.validateBinaryTreeNodes(4, {1, -1, 3, -1}, {2, -1, -1, -1});
    cout << ans;
    return 0;
}