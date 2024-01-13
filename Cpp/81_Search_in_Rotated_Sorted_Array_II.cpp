#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    bool search(vector<int> nums, int target)
    {
        int l = 0;
        int r = nums.size() - 1;
        while (l <= r)
        {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target)
                return true;
            // this is kind of point we have to be carefull
            // either check with mid and r or mid and l if mix it up you don't get answere
            if (nums[mid] > nums[l])
            {
                if (target < nums[l] || target > nums[mid])
                    l = mid + 1;
                else
                    r = mid - 1;
            }
            else if (nums[mid] < nums[l])
            { // this is treaky
                if (target < nums[mid] || target > nums[r])
                    r = mid - 1;
                else
                    l = mid + 1;
            }
            else
                ++l;
        }
        return false;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    // debug [1,1,1,1,1,1,1,1,1,13,1,1,1,1,1,1,1,1,1,1,1,1], 13,0
    auto t = obj.search({2, 5, 6, 0, 0, 1, 2}, 0);
    return 0;
}