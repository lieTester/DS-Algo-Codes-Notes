#include <bits/stdc++.h>
using namespace std;
class Solution
{
private:
    int memo(vector<vector<int>> &grid, vector<vector<int>> &dp, int r, int c, int m, int n)
    {
        if (r == m - 1 && c == n - 1)
            return grid[r][c];

        if (m <= r || n <= c)
            return INT_MAX;

        if (dp[r][c] != -1)
            return dp[r][c];

        int row = memo(grid, dp, r, c + 1, m, n);
        int col = memo(grid, dp, r + 1, c, m, n);

        dp[r][c] = grid[r][c] += min(row, col);
        return dp[r][c];
    }
    int tabul(vector<vector<int>> &grid, int m, int n)
    {
        // its not right way to change actual data use dp insted
        for (int i = 0; i < m; i++)
        {

            for (int j = 0; j < n; j++)
            {
                if (i == 0 && j == 0)
                    continue;
                else if (i == 0)
                    grid[i][j] += grid[i][j - 1];
                else if (j == 0)
                    grid[i][j] += grid[i - 1][j];
                else
                {
                    grid[i][j] += min(grid[i - 1][j], grid[i][j - 1]);
                }
            }
        }

        return grid[m - 1][n - 1];
    }

public:
    int minPathSum(vector<vector<int>> grid)
    {
        int m = grid.size();
        int n = grid[0].size();
        return tabul(grid, m, n);
        // vector<vector<int>> dp(m + 1, vector<int>(n + 1, -1));
        // return memo(grid, dp, 0, 0, m, n);
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    auto t = obj.minPathSum({{1, 3, 1}, {1, 5, 1}, {4, 2, 1}});
    return 0;
}