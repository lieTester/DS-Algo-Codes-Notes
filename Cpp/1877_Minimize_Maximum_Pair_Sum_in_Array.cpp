#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    // easy peasy just sorting and 2-pointer from start and end
    int minPairSum(vector<int> nums)
    {
        sort(begin(nums), end(nums));
        int ans = INT_MIN;
        for (int i = 0, j = nums.size() - 1; i < j; i++, j--)
        {
            ans = max(ans, nums[i] + nums[j]);
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
    auto t = obj.minPairSum({3, 5, 4, 2, 4, 6});
    cout << t;
    return 0;
}