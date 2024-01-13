#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    vector<int> parent;
    vector<int> rank;
    int find(int x)
    {
        if (parent[x] == x)
            return x;
        return parent[x] = find(parent[x]);
    }
    void _union(int v, int u)
    {
        u = find(u);
        v = find(v);
        if (rank[u] > rank[v])
        {
            parent[v] = u;
            rank[u] += 1;
        }
        else
        {
            parent[u] = v;
            rank[v] += 1;
        }
    }
    int regionsBySlashes(vector<string> grid)
    {
        int n = grid.size() + 1;
        parent.resize(n * n);
        rank.resize(n * n);
        int ans = 1; // for every cycle exist we increament
        for (int i = 0; i < n * n; i++)
        {
            rank[i] = 0;
            if (i % n == 0 || i < n || (i + 1) % n == 0 || (i >= (n * n) - n))
                parent[i] = 0, rank[0] += 1;
            else
                parent[i] = i;
        }

        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - 1; j++)
            {
                if (grid[i][j] == ' ')
                    continue;
                if (grid[i][j] == '/')
                {
                    if (find((n * i) + (j + 1)) == find((n * (i + 1)) + j))
                        ans++;
                    _union((n * i) + (j + 1), (n * (i + 1)) + j);
                }
                else
                {

                    if (find((n * i) + j) == find((n * (i + 1)) + j + 1))
                        ans++;
                    _union((n * i) + j, (n * (i + 1)) + j + 1);
                }
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

    auto t = obj.regionsBySlashes({"/\\/", "/\\\\", "\\ /"});
    cout << t;
    return 0;
}