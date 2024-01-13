#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    // same as koko eating bananas
    int smallestDivisor(vector<int> piles, int h)
    {
        int start = 1;
        int end = *max_element(piles.begin(), piles.end());
        int ans = INT_MAX;
        while (start <= end)
        {
            int mid = start + (end - start) / 2; // why we do this becuse when we use binary search on value it might over flow how? what if (start+end) become greater than in_max so if we use start+(end-start) to avoid overflow
            int count = 0;
            for (int i = 0; i < piles.size(); i++)
            {
                // to get ciel we have to convert piles[i] to float
                if (piles[i] > mid)
                    count += ceil(piles[i] * 1.0 / mid);
                else
                    count += 1;
                if (count > h)
                    break;
            }
            if (count > h)
                start = mid + 1;
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
    auto ans = obj.smallestDivisor({1, 2, 5, 9}, 6);
    cout << ans;
    return 0;
}