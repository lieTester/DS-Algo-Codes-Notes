#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    // back track not tough same as find total k subbaray of targetSum can be possible
    bool help(vector<int> &match, int indx, int count, int &target, int k)
    {
        if (k == 1)
            return true;
        if (indx >= match.size())
            return false;
        if (count == target)
        {
            return help(match, 0, 0, target, k - 1);
        }

        int temp;
        for (int i = indx; i < match.size(); i++)
        {
            if (match[i] == INT_MAX)
                continue;
            temp = match[i];
            if (temp + count <= target)
            {
                match[i] = INT_MAX;
                if (help(match, i + 1, temp + count, target, k))
                    return true;
                match[i] = temp;
            }
        }
        return false;
    }
    bool makesquare(vector<int> match)
    {
        int target = 0;
        for (auto i : match)
            target += i;
        if (target % 4 != 0)
            return false;
        target = target / 4;
        return help(match, 0, 0, target, 4);
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;

    auto t = obj.makesquare({1, 1, 2, 2, 2});
    cout << t;
    return 0;
}