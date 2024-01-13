#include <bits/stdc++.h>
using namespace std;
class Solution
{
private:
    int dfs(vector<vector<int>> &grid, int r, int c)
    {
        if (r >= grid.size() || c >= grid[0].size() || r < 0 || c < 0 || grid[r][c] == 0 || grid[r][c] == -1)
        {
            return 0;
        }
        int t = grid[r][c];
        grid[r][c] = -1;
        int temp = dfs(grid, r + 1, c);
        temp = max(temp, dfs(grid, r - 1, c));
        temp = max(temp, dfs(grid, r, c + 1));
        temp = max(temp, dfs(grid, r, c - 1));
        grid[r][c] = t;
        return temp + t;
    }

public:
    int getMaximumGold(vector<vector<int>> grid)
    {
        int ans = 0;
        for (int i = 0; i < grid.size(); i++)
        {
            for (int j = 0; j < grid[0].size(); j++)
            {
                if (grid[i][j] != 0)
                {
                    ans = max(ans, dfs(grid, i, j));
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
    auto t = obj.getMaximumGold({{0, 6, 0}, {5, 8, 7}, {0, 9, 0}});
    cout << t;
    return 0;
}