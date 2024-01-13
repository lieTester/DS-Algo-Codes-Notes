#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    // your code
    int minDeletion(vector<int> nums)
    {
        int count = 0;
        for (int i = 0; i < nums.size() - 1; ++i)
        {
            // why i-count to make the point after delete transfer all elements to left
            // i-count give us index point after deleting then next index become odd or even
            if (((i - count) & 1) == 0 && nums[i] == nums[i + 1])
                count++;
        }
        return (nums.size() - count) & 1 ? count + 1 : count; // its for if after removing or without remove array size is odd remove last element
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    auto ans = obj.minDeletion({1, 1, 2, 2, 3, 3});
    // cout << ans;
    return 0;
}