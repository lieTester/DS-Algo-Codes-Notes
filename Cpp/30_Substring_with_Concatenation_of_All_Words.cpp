#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    vector<int> findSubstring(string s, vector<string> words)
    {
        int k = words[0].size();
        int len = s.size() - (words.size() * k);
        int strLen = words.size() * k;
        if (s.size() < strLen)
            return {};

        map<string, int> mp, temp;
        vector<int> ans;
        for (string word : words)
        {
            ++mp[word];
            ++temp[word];
        }
        string x;
        for (int i = 0, j = 0; i <= len; ++i)
        {

            if (mp.count(s.substr(i, k)))
            {
                j = i;
                while (temp.size())
                {
                    x = s.substr(j, k);
                    if (temp.count(x))
                    {
                        --temp[x];
                        if (temp[x] == 0)
                            temp.erase(x);
                    }
                    else
                        break;
                    j += k;
                }
                if (temp.empty())
                    ans.push_back(i);
                temp = mp;
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
    auto ans = obj.findSubstring("barfoothefoobarman", {"foo", "bar"});
    // cout << ans;
    return 0;
}