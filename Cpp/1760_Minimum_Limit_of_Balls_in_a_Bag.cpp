#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    // same as koko eat bananas
    int minimumSize(vector<int> nums, int m)
    {
        int start = 1;
        int end = *max_element(nums.begin(), nums.end());
        int ans = INT_MAX;
        while (start <= end)
        {
            int mid = start + (end - start) / 2; // why we do this becuse when we use binary search on value it might over flow how? what if (start+end) become greater than in_max so if we use start+(end-start) to avoid overflow
            int count = 0;
            for (int i = 0; i < nums.size(); i++)
            {
                // to get ciel we have to convert piles[i] to float
                if (nums[i] > mid)
                    count += ceil(nums[i] * 1.0 / mid) - 1;
                // why minus 1 eg if we operate on 9 2 times what result will be
                // 9=> [6,3] => [3,3,3] which mean total ceil number we get -1 is over total count

                if (count > m)
                    break;
            }
            if (count > m) // why count
                start = mid + 1;
            else
            {
                ans = min(ans, mid);
                end = mid - 1;
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
    auto ans = obj.minimumSize({9}, 2);
    cout << ans;
    return 0;
}