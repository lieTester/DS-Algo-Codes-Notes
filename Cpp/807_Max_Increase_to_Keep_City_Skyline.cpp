#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    // greedy the question is increse the cell value upto min(maxInCol,maxInRow), maxInCol,maxInRow both would be taken out before we start manipulate data;
    int maxIncreaseKeepingSkyline(vector<vector<int>> g)
    {
        int m = g.size(), n = g[0].size();
        vector<int> row(m, 0), col(n, 0);
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                col[j] = max(col[j], g[i][j]);
                row[i] = max(row[i], g[i][j]);
            }
        }
        int ans = 0;
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                // how much we are increasing
                ans += min(col[j], row[i]) - g[i][j];
                g[i][j] = min(col[j], row[i]);
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
    auto t = obj.maxIncreaseKeepingSkyline({{3, 0, 8, 4}, {2, 4, 5, 7}, {9, 2, 6, 3}, {0, 3, 1, 0}});
    cout << t;
    return 0;
}