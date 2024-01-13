#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    /*
       Its just straight forward just add rung where its need and take max of rung you just added and ith rung

    */
    int addRungs(vector<int> rungs, int dist)
    {
        int ans = 0;
        int count = 0;
        for (int i = 0; i < rungs.size(); ++i)
        {
            if (rungs[i] - count > dist)
            {
                // ceil is important
                ans += ceil((rungs[i] - count - dist) * 1.0 / dist); // total rung we have to add to reach to next rung
                count += (rungs[i] - count - dist);
            }
            // we become greedy and take max because it creates a high chance to reach the next rug with optimal dist
            count = max(count, rungs[i]);
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
    auto ans = obj.addRungs({1, 3, 5, 10}, 2);
    cout << ans;
    return 0;
}