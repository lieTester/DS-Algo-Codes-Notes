#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    vector<int> rearrangeArray(vector<int> nums)
    {
        vector<int> ans;
        int i = 0, j = 0, n = nums.size();
        while (i < n || j < n)
        {
            while (i < n && nums[i] < 0)
                i++;
            if (i < n)
                ans.push_back(nums[i]);
            while (j < n && nums[j] > 0)
                j++;
            if (j < n)
                ans.push_back(nums[j]);
            ++i, ++j;
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
    auto ans = obj.rearrangeArray({3, 1, -2, -5, 2, -4});
    // cout << ans;
    return 0;
}