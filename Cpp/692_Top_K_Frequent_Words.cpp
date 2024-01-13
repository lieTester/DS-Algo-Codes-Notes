#include <bits/stdc++.h>
using namespace std;

class comparator
{
public:
    bool operator()(pair<int, string> &a, pair<int, string> &b)
    {
        if (a.first == b.first)
            return a.second > b.second;
        return a.first < b.first;
    }
};
class Solution
{
public:
    vector<string> topKFrequent(vector<string> words, int k)
    {
        priority_queue<pair<int, string>, vector<pair<int, string>>, comparator> pq;
        unordered_map<string, int> mp;

        for (int i = 0; i < words.size(); ++i)
        {
            mp[words[i]]++;
        }
        for (auto it = mp.begin(); it != mp.end(); ++it)
        {
            pq.push({it->second, it->first});
        }
        vector<string> ans;

        while (k--)
        {
            ans.push_back(pq.top().second);
            pq.pop();
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
    auto ans = obj.topKFrequent({"i", "love", "leetcode", "i", "love", "coding"}, 2);
    // cout << ans;
    return 0;
}