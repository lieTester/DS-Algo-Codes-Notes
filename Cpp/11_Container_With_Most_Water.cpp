#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int maxArea(vector<int> nums)
    {
        int i, j, l, r, ans;
        i = l = ans = 0;
        j = r = nums.size() - 1;
        while (i < j)
        {
            ans = max(ans, min(nums[i], nums[j]) * (j - i));
            if (nums[i] < nums[j])
                ++i;
            else if (nums[i] > nums[j])
                --j;
            else
            {
                l = i;
                r = j;
                while (l < r)
                {
                    if (l - r != 0)
                        break;
                    ++l;
                    --r;
                }
                if (nums[l] > nums[r])
                    --j;
                else
                    ++i;
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
    auto ans = obj.maxArea({1, 8, 6, 2, 5, 4, 8, 3, 7});
    // cout << ans;
    return 0;
}