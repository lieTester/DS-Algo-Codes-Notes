#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    vector<int> ans;
    int dfs(vector<vector<int>> &adj, vector<int> &qt, vector<bool> &vis, int node)
    {
        if (vis[node])
            return qt[node];
        vis[node] = true;
        int minm = INT_MAX;
        ans[node] = node;
        for (int i = 0; i < adj[node].size(); i++)
        {
            int t = dfs(adj, qt, vis, adj[node][i]);
            // what we are doing at this point is if any of the  of this node is quieter than himself than we took its quietness and make him current node's parent
            if (t < qt[node])
            {
                ans[node] = ans[adj[node][i]];

                qt[node] = t;
            }
        }
        // we are sending the current node quietness to children node
        return qt[node];
    }

    vector<int> loudAndRich(vector<vector<int>> richer, vector<int> quiet)
    {
        int n = quiet.size();
        vector<vector<int>> adj(n);
        ans.resize(n);
        for (int i = 0; i < richer.size(); i++)
        {
            // we are making 1th person is less richer than 0th person
            // so thier is possiblity that they cann be quiter than himself
            adj[richer[i][1]].push_back(richer[i][0]);
        }
        vector<bool> vis(n, false);

        for (int i = 0; i < n; i++)
        {
            if (!vis[i])
            {
                // temp is nothing just to handel return
                int temp = dfs(adj, quiet, vis, i);
            }
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

    auto t = obj.loudAndRich({{1, 0}, {2, 1}, {3, 1}, {3, 7}, {4, 3}, {5, 3}, {6, 3}}, {3, 2, 5, 4, 6, 1, 7, 0});

    return 0;
}