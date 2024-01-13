#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    /*

        (mid /time[i]) mean total trip can be completed in mid time by ith bus
        if total count<totalTrips then mid(time we are using to make trips is samller than we need)
            start=mid+1; this will give ans
        else
            try to complete atleast ttlTrips in minimum time
            end=mid-1;

    */
    long long minimumTime(vector<int> time, int totalTrips)
    {
        long long start, end, mid, count, ans = INT_MAX;
        start = 1;
        end = *max_element(time.begin(), time.end());
        end *= totalTrips;
        while (start <= end)
        {
            mid = start + (end - start) / 2;
            count = 0;
            for (int i = 0; i < time.size(); ++i)
            {
                count += (mid / time[i]);
            }
            if (count < totalTrips)
            {
                start = mid + 1;
            }
            else
            {
                end = mid - 1;
            }
        }
        return start; // this much time to make the totalTrip
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    auto ans = obj.minimumTime({1, 2, 3}, 5);
    // cout << ans;
    return 0;
}