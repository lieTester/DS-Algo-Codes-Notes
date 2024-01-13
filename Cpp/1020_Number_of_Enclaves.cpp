#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    /*
        Two Solutions Dfs and Union Find
        Just normal dfs

        if any chain of them leed to border then no need add collection of 1's we had in this call
        else the chain of 1's not lead to border then add all of them to ans.

        Unionfind
        Took much time then dfs but for understanding
        Well we first visit all the 1's in grid try to union then if they connect some from top down bottom left and also increament ans by 1,
        Then we look all 1's on border and decrease --ans to all the match parent of that cells parent

    */
    int temp = 0;
    bool connected = false;
    void dfs(vector<vector<int>> &g, vector<vector<bool>> &v, int i, int j)
    {
        if (i >= g.size() || i < 0 || j >= g[0].size() || j < 0)
        {
            connected = true;
            return;
        }

        if (v[i][j] || g[i][j] == 0)
            return;
        v[i][j] = true;
        ++temp;
        dfs(g, v, i + 1, j);
        dfs(g, v, i - 1, j);
        dfs(g, v, i, j + 1);
        dfs(g, v, i, j - 1);
    }
    int NormalGraphDfs(vector<vector<int>> &g)
    {
        vector<vector<bool>> vis(g.size(), vector<bool>(g[0].size(), false));
        int ans = 0;
        for (int i = 0; i < g.size(); ++i)
        {
            for (int j = 0; j < g[0].size(); ++j)
            {
                if (g[i][j] && vis[i][j] == false)
                {
                    connected = false;
                    temp = 0;
                    dfs(g, vis, i, j);
                    if (connected == false)
                        ans += temp;
                }
            }
        }
        return ans;
    }

    /*
        ##########################################################################
        below is union find
        ##########################################################################
    */
    vector<int> parent;
    vector<int> rank;
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
        if (rank[v] > rank[u])
        {
            parent[u] = v;
            ++rank[v];
        }
        else
        {
            parent[v] = u;
            ++rank[u];
        }
    }
    void reduse(int &ans, int n, int p)
    {
        for (int i = 0; i < n; i++)
            if (parent[i] == p)
                --ans;
    }

    int UnionFind(vector<vector<int>> &g)
    {
        int r = g.size();
        int c = g[0].size();
        map<int, bool> vis;
        int ans = 0, p1, p2;
        parent.resize(r * c);
        rank.resize(r * c);
        for (int i = 0; i < r * c; i++)
            parent[i] = i, rank[i] = 0;
        for (int i = 0; i < r; ++i)
        {
            for (int j = 0; j < c; ++j)
            {
                if (g[i][j])
                {
                    ans++;
                    if (i - 1 > 0 && g[i - 1][j])
                        _union(i * c + j, (i - 1) * c + j);
                    if (i + 1 < r && g[i + 1][j])
                        _union(i * c + j, (i + 1) * c + j);
                    if (j - 1 > 0 && g[i][j - 1])
                        _union(i * c + j, i * c + (j - 1));
                    if (j + 1 < c && g[i][j + 1])
                        _union(i * c + j, i * c + (j + 1));
                }
            }
        }
        for (int i = 0; i < r * c; i++)
            parent[i] = find(i);

        for (int j = 0; j < c; ++j)
        {
            p1 = p2 = -1;
            if (g[0][j] && vis.count(find(j)) == 0)
                p1 = find(j);
            if (g[r - 1][j] && vis.count(find((r - 1) * c + j)) == 0)
                p2 = find((r - 1) * c + j);
            vis[p1] = vis[p2] = 1;
            if (p1 != -1)
                reduse(ans, r * c, p1);
            if (p2 != -1)
                reduse(ans, r * c, p2);
        }

        for (int i = 0; i < r; ++i)
        {
            p1 = p2 = -1;
            if (g[i][0] && vis.count(find(i * c)) == 0)
                p1 = find(i * c);
            if (g[i][c - 1] && vis.count(find(i * c + (c - 1))) == 0)
                p2 = find(i * c + (c - 1));
            vis[p1] = vis[p2] = 1;
            if (p1 != -1)
                reduse(ans, r * c, p1);
            if (p2 != -1)
                reduse(ans, r * c, p2);
        }

        return ans;
    }

    int numEnclaves(vector<vector<int>> g)
    {
        // return UnionFind(g);
        return NormalGraphDfs(g);
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    //

    // auto t = obj.numEnclaves({{0, 0, 0, 0}, {1, 0, 1, 0}, {0, 1, 1, 0}, {0, 0, 0, 0}});
    // auto t = obj.numEnclaves({{0, 1, 1, 0}, {0, 0, 1, 0}, {0, 0, 1, 0}, {0, 0, 0, 0}});
    auto t = obj.numEnclaves({{0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0}, {1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1}, {1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1}, {1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0}, {1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1}, {1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0}, {0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0}, {0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0}, {1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1}, {1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0}});
    cout << t;
    return 0;
}