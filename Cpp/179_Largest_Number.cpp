#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    string largestNumber(vector<int> n)
    {
        vector<string> nums;
        int countZero = 0;
        for (int i : n)
        {
            if (i == 0)
                ++countZero;
            nums.push_back(to_string(i));
        }
        if (countZero == n.size())
            return "0";
        sort(nums.begin(), nums.end(), [](string &a, string &b)
             { return (a + b) > (b + a); });
        string ans;
        for (auto i : nums)
            ans += i;
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
    auto ans = obj.largestNumber({1, 8, 6, 2, 5, 4, 8, 3, 7});
    // cout << ans;
    return 0;
}