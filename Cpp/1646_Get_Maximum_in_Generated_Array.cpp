// { Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution
{
public:
    /*

        You are given an integer n. A 0-indexed integer array nums of length n + 1 is generated in the following way:

        nums[0] = 0
        nums[1] = 1
        nums[2 * i] = nums[i] when 2 <= 2 * i <= n
        nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
        Return the maximum integer in the array nums​​​.
    */
    int getMaximumGenerated(int n)
    {
        if (n < 2)
            return n;
        vector<int> temp;
        temp.push_back(0);
        temp.push_back(1);
        int ans = 1;
        for (int i = 1; 2 * i < n; i++)
        {

            temp.push_back(temp[i]);
            temp.push_back(temp[i] + temp[i + 1]);

            ans = max(ans, max(temp[2 * i], temp[2 * i + 1]));
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
    auto t = obj.getMaximumGenerated(7);
    cout << t;
    return 0;
}
// } Driver Code Ends