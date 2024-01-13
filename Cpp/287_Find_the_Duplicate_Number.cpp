#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    // this is treaky becuase only one duplicated but the duplicate can be repeated more than ones i arr
    // we use fast and slow pointer can be done with map,binarysearch as well
    int findDuplicate(vector<int> nums)
    {
        int fast = 0, slow = 0;
        while (true)
        {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow == fast)
                break;
            // it a part where we get the intersection point bcs after this and before this we get the dup
        }
        slow = 0;
        while (true)
        {
            slow = nums[slow];
            fast = nums[fast];
            if (slow == fast)
                return slow;
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
    // this is one of the test cases [2,2,2,2,2]
    auto t = obj.findDuplicate({1, 3, 4, 2, 2});
    cout << t;
    return 0;
}