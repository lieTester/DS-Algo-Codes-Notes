#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    /* easy sort first
    // then pick 2 (from end) and 1 from (start), becuse every one want max and my turrn is always 2 then ill pick second largest in pill of three for eg:
    [9,8,7,6,5,1,2,3,4] ==>>[1,2,3,4,5,6,7,8,9] ,[2,4,1,2,7,8] ==>> [1,2,2,4,7,8]

    9,8,1  => 8 is mine                           8,7,1  => 7 is mine
    7,6,2  => 6 is mine                           4,2,2  => 2 is mine
    5,4,3  => 4 is mine                           -----
    -----                                           9
      18

    */
    int maxCoins(vector<int> piles)
    {
        sort(piles.begin(), piles.end());
        int i = 0, ans = 0;
        int j = piles.size() - 1;
        while (i < j)
        {
            ans += piles[j - 1];
            ++i;
            j -= 2;
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
    //

    // auto t = obj.maxCoins({2, 4, 1, 2, 7, 8});
    auto t = obj.maxCoins({9, 8, 7, 6, 5, 1, 2, 3, 4});
    cout << t;
    return 0;
}