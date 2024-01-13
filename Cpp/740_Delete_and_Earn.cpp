#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    int memo(vector<int> &nums, int n, vector<int> &dp)
    {
        if (n <= 0)
            return 0;
        if (dp[n] != -1)
            return dp[n];

        int points = 0, indx = n, indx2;

        while (indx > 0 && nums[n - 1] == nums[indx - 1]) // take all elements of have same value
            indx--, points += nums[n - 1];
        indx2 = indx;
        while (indx2 > 0 && nums[n - 1] == nums[indx2 - 1] + 1) // pass all elements are equal to nums[n-1]-1
            indx2--;

        points += memo(nums, indx2, dp);
        points = max(points, memo(nums, indx, dp));

        return dp[n] = points;
    }
    int deleteAndEarn(vector<int> nums)
    {
        // vector<int>dp(nums.size()+1,-1);
        // sort(nums.begin(),nums.end());
        // return memo(nums,nums.size(),dp);

        /*
            above code is for memoization
            and below one is tabulation
        */

        vector<int> t;
        unordered_map<int, int> mp;
        for (auto i : nums)
        {
            if (mp.count(i) == 0)
                t.push_back(i);
            mp[i]++;
        }
        sort(t.begin(), t.end());
        vector<int> dp(t.size(), 0);
        int ans = 0;

        for (int i = 0; i < t.size(); i++)
        {
            dp[i] = t[i] * mp[t[i]];

            if (i == 1)
                dp[i] += (t[1] == t[0] + 1) ? 0 : dp[0];
            else if (i != 0 && t[i] != t[i - 1] + 1)
                dp[i] += max(dp[i - 2], dp[i - 1]);
            else if (i != 0)
                dp[i] += max(dp[i - 2], i > 2 ? dp[i - 3] : 0); // why this i>2 condition here debug [1,1,1,2,4,5,5,5,6] test case

            ans = max(ans, dp[i]);
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
    auto t = obj.deleteAndEarn({2, 2, 3, 3, 3, 4});

    return 0;
}