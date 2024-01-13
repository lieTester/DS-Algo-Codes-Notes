#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    vector<int> largestDivisibleSubset(vector<int> nums)
    {
        // longest incresing subsequence
        sort(nums.begin(), nums.end());
        vector<int> dp[nums.size()];
        int idx = 0;
        for (int i = 0; i < nums.size(); i++)
        {
            for (int j = 0; j <= i; j++)
            {
                if (nums[i] % nums[j] == 0)
                {
                    if (dp[i].size() <= dp[j].size())
                    {
                        dp[i] = dp[j];
                    }
                }
            }
            dp[i].push_back(nums[i]);
            if (dp[i].size() >= dp[idx].size())
                idx = i;
        }
        return dp[idx];
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    auto ans = obj.largestDivisibleSubset({1, 2, 3});
    // cout << ans;
    return 0;
}