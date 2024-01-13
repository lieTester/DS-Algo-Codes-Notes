#include <bits/stdc++.h>
using namespace std;
typedef vector<vector<string>> vvs;
typedef map<string, vector<pair<string, double>>> mvpsd;
class Solution
{
public:
    double ans = 1;
    bool dfs(string start, string end, mvpsd &adjL, set<string> &vis)
    {
        if (start == end)
            return true;
        if (vis.find(start) != vis.end())
            return false;

        vis.insert(start);
        for (auto i : adjL[start])
        {
            ans = ans * i.second;
            if (dfs(i.first, end, adjL, vis))
            {
                return true;
            }
            // backtrack
            ans = ans / i.second;
        }
        return false;
    }
    vector<double> calcEquation(vvs e, vector<double> v, vvs q)
    {
        mvpsd adjL;
        vector<double> result;

        for (int i = 0; i < e.size(); i++)
        {

            adjL[e[i][0]].push_back({e[i][1], v[i]});
            adjL[e[i][1]].push_back({e[i][0], 1 / v[i]}); // to handel reverse ,like a,b is 2.00, then b,a is 1/2.00
        }

        for (auto i : q)
        {
            ans = 1;
            set<string> vis;
            // adjL[f].size() is important if f has no neighbours then we don't need to traverse

            if (adjL[i[0]].size() && dfs(i[0], i[1], adjL, vis))
            {
                result.push_back(ans);
            }
            else
            {
                result.push_back(-1.00);
            }
        }
        return result;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;

    auto t = obj.calcEquation({{"a", "b"}, {"b", "c"}}, {2.0, 3.0}, {{"a", "c"}, {"b", "a"}, {"a", "e"}, {"a", "a"}, {"x", "x"}});

    return 0;
}