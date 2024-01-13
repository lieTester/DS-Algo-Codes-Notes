#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    void memo(vector<vector<int>> &grid, vector<vector<int>> &dp, int &vac, int i, int j, int &TCount, int covered)
    {

        if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size())
            return;
        if (grid[i][j] == -1 || dp[i][j])
            return;
        if (grid[i][j] == 2)
        {
            // covered-1 because this very is a 2 place which not counted in vac space
            // but covered+1 by present function call
            if (covered - 1 == vac)
                TCount++;
            return;
        }

        dp[i][j] = 1;

        memo(grid, dp, vac, i - 1, j, TCount, covered + 1);
        memo(grid, dp, vac, i + 1, j, TCount, covered + 1);
        memo(grid, dp, vac, i, j - 1, TCount, covered + 1);
        memo(grid, dp, vac, i, j + 1, TCount, covered + 1);

        dp[i][j] = 0;
    }

    int uniquePathsIII(vector<vector<int>> &grid)
    {
        int m = grid.size();
        int n = grid[0].size();
        vector<vector<int>> dp(m, vector<int>(n, 0));

        int blocks = 0;
        int x, y;
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (!grid[i][j])
                    blocks++;
                else if (grid[i][j] == 1)
                {
                    x = i;
                    y = j;
                }
            }
        }

        int tCount = 0;
        memo(grid, dp, blocks, x, y, tCount, 0);
        return tCount;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    vector<vector<int>> n1 = {{1, 0, 0, 0}, {0, 0, 0, 0}, {0, 0, 2, -1}};
    vector<int> n2 = {2, 3};
    cout << obj.uniquePathsIII(n1);
    return 0;
}