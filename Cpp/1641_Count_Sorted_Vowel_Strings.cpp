#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    // logic is we store sum of all vowels come after curr vowels
    // initital we have [1,1,1,1,1] n==1
    // n==2 ,both index including
    // dp[0 or a]= previous dp[0-4]
    // dp[1 or e]= previous dp[1-4]
    // dp[2 or i]= previous dp[2-4]
    // dp[3 or o]= previous dp[3-4]
    // dp[4 or u]= previous dp[4-4]

    int countVowelStrings(int n)
    {
        vector<int> dp(5, 1), temp(5, 1);
        long ans = 5;
        for (int i = 2; i <= n; i++)
        {
            temp = dp, ans = 0;
            for (int j = 0; j < 5; j++)
            {
                dp[j] = 0;
                for (int k = j; k < 5; k++)
                    dp[j] += temp[k];
                ans += dp[j];
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

    auto t = obj.countVowelStrings(7);
    cout << t;
    return 0;
}
