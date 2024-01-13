#include <bits/stdc++.h>
using namespace std;
// this can be done by bipartite dfs but this you get to know about uinon find solution of bipartite.
class Solution
{
    vector<int> parent, rank;

public:
    /*
        simple union all neighbour nodes of ith node but,
        before union check that jth neighbour of ith node don't lie in same group
            if ith==jth so return false:
            else uninon(ith[0],j);

    */
    int find(int x)
    {
        if (parent[x] == x)
            return x;
        return parent[x] = find(parent[x]);
    }
    void _union(int u, int v)
    {
        u = find(u);
        v = find(v);
        if (rank[u] < rank[v])
        {
            rank[v]++;
            parent[u] = v;
        }
        else
        {
            rank[u]++;
            parent[v] = u;
        }
    }
    bool possibleBipartition(int n, vector<vector<int>> A)
    {
        parent.resize(n + 1);
        rank.resize(n + 1);
        vector<vector<int>> adj(n + 1);
        vector<bool> vis(n, false);

        for (int i = 0; i < A.size(); ++i)
        {
            adj[A[i][0] - 1].push_back(A[i][1] - 1);
            adj[A[i][1] - 1].push_back(A[i][0] - 1);
        }
        for (int i = 0; i < n; ++i)
        {
            parent[i] = i;
            rank[i] = 0;
        }
        for (int i = 0; i < n; ++i)
        {
            for (auto j : adj[i])
            {
                if (find(i) == find(j))
                    return false;
                else
                {
                    _union(j, adj[i][0]);
                }
            }
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
    auto t = obj.possibleBipartition(4, {{1, 2}, {1, 3}, {2, 4}});
    cout << t;
    return 0;
}