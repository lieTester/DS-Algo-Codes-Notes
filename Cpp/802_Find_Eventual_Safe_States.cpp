#include <bits/stdc++.h>
using namespace std;

class Solution
{
    vector<int> ans;
    map<int, int> selected;

public:
    /*
        what question if any path from node lead to cylce than it is not safe?
        so we check that any node following path connected to neighbour
        node none of them lead to cycle and all reach to leafnode then we add it to ans
        else we don't add it.

        we use dfs and map:-
        map is for, suppose we leed to a alredy visited node than we should return false, but what if the currnode we are on visit is already a safe node.
        Because of above point we make the selected map which store all safe node those are visited.
        so,every time we get a visited node we check that if it is in  selected map then return true means this path is safe else false.

    */
    bool help(vector<vector<int>> &g, vector<bool> &vis, int node)
    {
        if (vis[node])
        {
            if (selected.count(node))
                return true;
            return false;
        }
        vis[node] = 1;
        for (auto i : g[node])
        {
            if (!help(g, vis, i))
                return false;
        }
        ans.push_back(node);
        selected[node] = 1;
        return true;
    }
    vector<int> eventualSafeNodes(vector<vector<int>> g)
    {
        vector<bool> vis(g.size(), false);
        for (int i = 0; i < g.size(); ++i)
        {
            if (vis[i] == false)
            {
                help(g, vis, i);
            }
        }
        sort(ans.begin(), ans.end());
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

    auto t = obj.eventualSafeNodes({{1, 2}, {2, 3}, {5}, {0}, {5}, {}, {}});
    return 0;
}