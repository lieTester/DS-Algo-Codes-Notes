#include <bits/stdc++.h>
using namespace std;
class Solution
{
    map<int, int> mp;

public:
    int minSwapsCouples(vector<int> row)
    {
        for (int i = 0; i < row.size(); ++i)
        {
            mp[row[i]] = i;
        }
        int first, second, ans = 0;
        for (int i = 0; i < row.size(); i += 2)
        {
            first = row[i];
            if (first & 1)
            {
                if (first - 1 != row[i + 1])
                {
                    ++ans;
                    second = row[i + 1];
                    swap(row[i + 1], row[mp[first - 1]]); //
                    mp[second] = mp[first - 1];
                    mp[first - 1] = i + 1;
                }
            }
            else
            {
                if (first + 1 != row[i + 1])
                {
                    ++ans;
                    second = row[i + 1];
                    swap(row[i + 1], row[mp[first + 1]]); //
                    mp[second] = mp[first + 1];
                    mp[first + 1] = i + 1;
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
    auto ans = obj.minSwapsCouples({0, 2, 1, 3});
    // cout << ans;
    return 0;
}