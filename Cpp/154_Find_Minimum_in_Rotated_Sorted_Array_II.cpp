#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    // your code
    int findMin(vector<int> nums)
    {
        int l = 0, mid;
        int r = nums.size() - 1;
        int ans = nums[0];
        while (l <= r)
        {
            mid = (l + r) / 2;
            if (nums[mid] < nums[r])
            { // it means  mid to r array is sorted
                r = mid - 1;
            }
            else if (nums[mid] > nums[r])
            { // it means left part is sorted and bcs of r is smaller minm is on right
                l = mid + 1;
            }
            else
            {
                --r;
            }
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