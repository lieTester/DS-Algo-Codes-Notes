#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    // matrix chain multiplication
    int help(int i, int j, vector<int> &nums, vector<vector<int>> &dp)
    {
        if (i > j)
            return 0;
        if (dp[i][j] != -1)
            return dp[i][j];

        int ans = INT_MIN, l, r, t;
        for (int k = i; k <= j; k++)
        {
            l = help(i, k - 1, nums, dp);
            r = help(k + 1, j, nums, dp);
            t = (i - 1 >= 0 ? nums[i - 1] : 1) * nums[k] * (j + 1 < nums.size() ? nums[j + 1] : 1);
            ans = max(ans, l + r + t);
        }
        return dp[i][j] = ans;
    }
    int maxCoins(vector<int> nums)
    {
        int n = nums.size();
        vector<vector<int>> dp(n + 1, vector<int>(n + 1, -1));
        return help(0, n - 1, nums, dp);
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;

    auto t = obj.maxCoins({3, 1, 5, 8});
    cout << t;
    return 0;
}