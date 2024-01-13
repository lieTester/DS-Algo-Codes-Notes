#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    int findMin(vector<int> nums)
    {
        int l = 0;
        int r = nums.size() - 1;
        int ans = nums[0];
        while (l <= r)
        {
            int mid = (r + l) / 2;

            if (nums[mid] < nums[r])
                r = mid - 1;
            else
                l = mid + 1;
            ans = min(ans, nums[mid]);
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
    auto t = obj.findMin({2, 4, 1, 3, 5});
    cout << t;
    return 0;
}