#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    string minWindow(string s, string t)
    {
        unordered_map<char, int> mp;
        int i, j, count;
        string ans = s;
        for (i = 0; i < t.size(); i++)
        {
            mp[t[i]]++;
        }
        count = mp.size();
        for (i = 0, j = 0; i < s.size(); i++)
        {
            mp[s[i]]--;
            if (mp[s[i]] == 0)
                --count;

            if (count == 0)
            {
                while (count == 0)
                {
                    if (ans.size() > i - j + 1)
                    {
                        ans = s.substr(j, i - j + 1);
                    }
                    ++mp[s[j]];
                    if (mp[s[j]] == 1)
                        ++count;
                    ++j;
                }
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
    auto ans = obj.minWindow("ADOBECODEBANC", "ABC");
    cout << ans;
    return 0;
}