#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int countNumbersWithUniqueDigits(int n)
    {
        /*
            pattern 0=1
                    1=9
                    2=9*[1]
                    3=8*[2]
                    4=7*[3]
                    5=6*[4]
                 -------------
                 add all them


        */
        if (n < 2)
            return n == 0 ? 1 : 10;
        int dp[n + 1];
        dp[0] = 1;
        dp[1] = 9;
        int ans = 10;
        for (int i = 2; i <= n; ++i)
        {
            dp[i] = dp[i - 1] * dp[1]--;
            ans += dp[i];
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
    auto ans = obj.countNumbersWithUniqueDigits(6);
    cout << ans;
    return 0;
}