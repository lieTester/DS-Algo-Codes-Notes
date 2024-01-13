#include <bits/stdc++.h>
using namespace std;

class Solution
{
    int parent[26], rank[26];

public:
    /*
        basically what we do  is first we make union of all == equations then,
        now we look if eq has x!=y and if x and y has same parent than it is not possible
        that the x==y and x!=y
        if x and y both have diffrent parents than only x!=y staisfy
    */
    int find(int x)
    {
        if (parent[x] == x)
            return x;
        return parent[x] = find(parent[x]);
    }
    void _union(int u, int v)
    {
        u = find(u);
        v = find(v);
        if (rank[v] > rank[u])
        {
            parent[u] = v;
            ++rank[v];
        }
        else
        {
            parent[v] = u;
            ++rank[u];
        }
    }
    bool equationsPossible(vector<string> eq)
    {
        for (int i = 0; i < 26; ++i)
        {
            parent[i] = i;
            rank[i] = 0;
        }

        for (auto s : eq)
        {
            if (s[1] == '=' && s[2] == '=')
            {
                _union(s[0] - 'a', s[3] - 'a');
            }
        }
        for (auto s : eq)
        {
            if (s[1] == '!' && s[2] == '=')
            {
                if (find(s[0] - 'a') == find(s[3] - 'a'))
                    return false;
            }
        }
        return true;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;

    // auto t = obj.equationsPossible({"a==b", "b!=a"});
    auto t = obj.equationsPossible({"a==b", "b==a"});
    cout << t;
    return 0;
}