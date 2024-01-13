#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    /*
        from end we look for sudden break in incresing order from (left <<==to== right)
        if there is:
            1 then we took the break index and look the greater elements from nums[breakindex]<nums[(left <<==to== right)].
            2 after we get first we swap both of then, sort all elem after breakindex.
        else:
            sort the array in ascending

    */
    void nextPermutation(vector<int> &nums)
    {
        int n = nums.size() - 1, i;
        for (i = n - 1; i >= 0; --i)
        {
            if (nums[i] < nums[i + 1])
                break;
        }
        if (i != -1)
        {
            int j;
            for (j = n; j > i; --j)
            {
                if (nums[i] < nums[j])
                    break;
            }
            swap(nums[i], nums[j]);
            sort(nums.begin() + i + 1, nums.end());
        }
        else
        {
            sort(nums.begin(), nums.end());
        }
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    vector<int> num = {1, 1, 5};
    obj.nextPermutation(num);

    return 0;
}