#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    // same as koko eating banana
    int minimizedMaximum(int n, vector<int> quantities)
    {
        int start = 1;
        int end = *max_element(quantities.begin(), quantities.end());
        int ans = end;
        while (start <= end)
        {
            int mid = start + (end - start) / 2;
            int count = 0;
            for (int product : quantities)
            {
                if (product > mid)
                    count += ceil(product * 1.0 / mid);
                else
                    count += 1;
                if (count > n)
                    break;
            }
            if (count > n)
            {
                start = mid + 1;
            }
            else
            {
                ans = min(ans, mid);
                end = mid - 1;
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
    auto ans = obj.minimizedMaximum(6, {11, 6});
    cout << ans;
    return 0;
}