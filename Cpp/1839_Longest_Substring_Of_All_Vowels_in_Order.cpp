#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    // your code
    int longestBeautifulSubstring(string s)
    {
        unordered_map<char, bool> mp;
        mp[s[0]] = 1;
        int ans = 0;
        int i, j;
        for (i = 1, j = 0; i < s.size(); i++)
        {
            if (s[i] < s[i - 1])
            {
                if (mp.size() == 5)
                    ans = max(ans, i - j);
                mp.clear();
                j = i;
            }
            mp[s[i]] = 1;
        }
        if (mp.size() == 5)
            ans = max(ans, i - j);
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
    //

    auto t = obj.longestBeautifulSubstring("aeeeiiiioooauuuaeiou");
    cout << t;
    return 0;
}