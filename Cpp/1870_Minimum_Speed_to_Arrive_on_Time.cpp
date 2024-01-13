#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int minSpeedOnTime(vector<int> dist, double hour)
    {
        int start = 1;
        int end = 1e+9;
        int mid;
        while (start <= end)
        {
            mid = start + (end - start) / 2;
            double count = 0;
            for (int i = 0; i < dist.size(); ++i)
            {
                count = ceil(count);
                // its a important point we cannot use ceil directly at dvd point beacuse it
                // give us the ceil for last point as well and at last we don't have to wait for
                // train (because of train arival time is always int) so we get correct ans

                count += (dist[i] * 1.0) / mid;
            }
            if (count > hour)
            {
                start = mid + 1;
            }
            else
            {
                end = mid - 1;
            }
        }

        return start > 1e+9 ? -1 : start;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    auto ans = obj.minSpeedOnTime({1, 3, 2}, 6);
    // cout << ans;
    return 0;
}