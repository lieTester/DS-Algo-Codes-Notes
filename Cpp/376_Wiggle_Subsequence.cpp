#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    // your code
    int wiggleMaxLength(vector<int> nums)
    {
        // its LIS but just a turner if  nums[i] grater look te min dp ,if smaller look max dp
        int n = nums.size();
        int ans = 1;
        vector<int> maxDp(n, 1), minDp(n, 1);
        for (int i = 0; i < n; ++i)
        {
            for (int j = 0; j < i; ++j)
            {
                if (nums[i] < nums[j])
                {
                    maxDp[i] = max(maxDp[i], minDp[j] + 1);
                }
                else if (nums[i] > nums[j])
                {
                    minDp[i] = max(minDp[i], maxDp[j] + 1);
                }

                ans = max({ans, maxDp[i], minDp[i]});
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
    auto ans = obj.wiggleMaxLength({1, 17, 5, 10, 13, 15, 10, 5, 16, 8});
    // cout << ans;
    return 0;
}