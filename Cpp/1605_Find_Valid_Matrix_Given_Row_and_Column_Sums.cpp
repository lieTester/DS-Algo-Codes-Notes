#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    vector<vector<int>> restoreMatrix(vector<int> rowSum, vector<int> colSum)
    {
        int m = rowSum.size();
        int n = colSum.size();
        vector<vector<int>> ans(m, vector<int>(n));
        // just become greedy and take minimum minus is from maximum
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (rowSum[i] < colSum[j])
                {
                    ans[i][j] = rowSum[i];
                    colSum[j] -= rowSum[i];
                    rowSum[i] = 0;
                }
                else
                {
                    ans[i][j] = colSum[j];
                    rowSum[i] -= colSum[j];
                    colSum[j] = 0;
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
    auto t = obj.restoreMatrix({5, 7, 10}, {8, 6, 8});

    return 0;
}