#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    //
    int matrixScore(vector<vector<int>> &g)
    {
        int m = g.size();
        int n = g[0].size();

        // for row the point is if first element of row is 0 then change toggle entire row
        for (int i = 0; i < m; i++)
        {
            if (g[i][0] == 1)
                continue;
            for (int j = 0; j < n; j++)
                g[i][j] ^= 1;
        }
        int ans = 0, temp = 0;

        // for column wise toogle we check that it total 1 in column is already in majority then we don't change
        // else toogle entire column
        for (int j = 0; j < n; j++)
        {
            temp = 0;
            for (int i = 0; i < m; i++)
                if (g[i][j])
                    temp++;

            if (temp >= (m - temp))
                continue;
            for (int i = 0; i < m; i++)
                g[i][j] ^= 1;
        }
        for (int i = 0; i < m; i++)
        {
            temp = 0;
            for (int j = 0; j < n; j++)
            {
                // basic way to make a number with bits
                temp += (g[i][j] << (n - j - 1));
                // cout<<g[i][j]<<" ";
            }
            ans += temp;
            // cout<<endl;
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
    auto t = obj;

    return 0;
}