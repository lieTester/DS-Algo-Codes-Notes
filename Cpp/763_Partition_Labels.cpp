#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    // easy peasy just take the last index of char in mp and
    //  in next loop every time lastCharacterPresentAtIndex==i increase count if the charcter present in size(temp)==count mean its a break point store length in ans
    vector<int> partitionLabels(string s)
    {
        unordered_map<char, int> mp, temp;
        vector<int> ans;
        int count = 0, i, j;
        for (int i = 0; i < s.size(); i++)
        {
            mp[s[i]] = i;
        }
        for (i = 0, j = 0; i < s.size(); i++)
        {
            temp[s[i]] = 1;
            if (mp[s[i]] == i)
                count++;

            if (temp.size() == count)
            {
                ans.push_back(i - j + 1);
                j = i + 1;
                count = 0;
                temp.clear();
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
    auto t = obj.partitionLabels("ababcbacadefegdehijhklij");

    return 0;
}