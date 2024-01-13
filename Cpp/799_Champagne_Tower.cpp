#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    /*
        we are going to make pascal triangle
                1
              1   1
            1   2   1
          1   3   3   1
        1   4   6   4   1


    */
    double champagneTower(int poured, int query_row, int query_glass)
    {
        // if no champagne
        if (poured == 0)
            return 0;

        vector<double> dp;
        vector<double> temp;
        int n;
        double nextpor;
        dp.push_back(poured);

        while (query_row-- > 0)
        {
            n = dp.size();
            nextpor = max((dp[0] - 1) / 2, 0.00);
            temp.clear();
            // for first  and last column of row it will above row's first and last column [(prevRow[0]-1)/2];
            // but the middle work [(prevRow[i-1]-1)2]+[(prevRow[i]-1)/2] same as pascal.
            temp.push_back(nextpor);
            // this loop start working from n=2;
            for (int i = 1; i < n; i++)
            {
                nextpor = max((dp[i - 1] - 1) / 2, 0.00) + max((dp[i] - 1) / 2, 0.00);
                temp.push_back(nextpor);
            }
            // last and fisrt column will fill same;
            temp.push_back(temp.front());
            dp = temp;
        }

        return min(1.00, dp[query_glass]);
    }
};

int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    auto t = obj.champagneTower(2, 1, 1);
    return 0;
}