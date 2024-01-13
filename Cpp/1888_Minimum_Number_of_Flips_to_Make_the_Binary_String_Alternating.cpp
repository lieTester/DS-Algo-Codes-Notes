#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int minFlips(string s)
    {
        int count1, count2;
        count1 = count2 = 0;
        int n = s.size();
        s = (s + s);
        string alt1, alt2;

        for (int i = 0; i < 2 * n; ++i)
        {
            if (i & 1)
                alt1 += '1';
            else
                alt1 += '0';

            if (i & 1)
                alt2 += '0';
            else
                alt2 += '1';
        }

        int ans = n;
        for (int i = 0, j = 0; i < 2 * n; ++i)
        {
            if (i < n)
            {
                if (alt1[i] != s[i])
                    ++count1;
                if (alt2[i] != s[i])
                    ++count2;
            }
            else
            {
                if (alt1[j] != s[j])
                    --count1;
                if (alt2[j] != s[j])
                    --count2;

                if (alt1[i] != s[i])
                    ++count1;
                if (alt2[i] != s[i])
                    ++count2;
                ++j;
                ans = min({ans, count1, count2});
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
    auto ans = obj.minFlips("111000");
    // cout << ans;
    return 0;
}