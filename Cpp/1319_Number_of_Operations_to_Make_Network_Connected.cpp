#include <bits/stdc++.h>
using namespace std;
class Solution
{
    vector<int> parent;
    vector<int> rank;

public:
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
        if (u != v)
        {
            if (rank[u] < rank[v])
            {
                parent[u] = v;
                rank[v] += 1;
            }
            else
            {
                parent[v] = u;
                rank[u] += 1;
            }
        }
        else
        {
            rank[u] += 1;
        }
    }
    int makeConnected(int n, vector<vector<int>> conn)
    {
        parent.resize(n);
        rank.resize(n);
        unordered_map<int, bool> mp;
        for (int i = 0; i < n; i++)
        {
            parent[i] = i;
            rank[i] = 0;
        }
        for (int i = 0; i < conn.size(); i++)
        {
            _union(conn[i][0], conn[i][1]);
        }
        for (int i = 0; i < n; i++)
        {
            mp[find(parent[i])] = 1; // this is imporant debug this n=5 ,[[0,1],[0,2],[3,4],[2,3]]
        }
        if (conn.size() >= n - 1)
            return mp.size() - 1; // if we have n-1 edges then we can make a connected graph
        return -1;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;

    auto t = obj.makeConnected(5, {{0, 1}, {0, 2}, {3, 4}, {2, 3}});
    cout << t;
    return 0;
}