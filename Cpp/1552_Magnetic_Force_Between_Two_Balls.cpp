#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    /*
       same as Split array bw largest sum
     */
    int maxDistance(vector<int> position, int m)
    {
        sort(position.begin(), position.end()); // sort is important
        int start = 1;
        int end = position[position.size() - 1];
        int mid, count, prev;
        while (start <= end)
        {
            mid = start + (end - start) / 2;
            count = 1;
            prev = position[0];
            for (int i = 1; i < position.size(); ++i)
            {
                if (position[i] - prev >= mid)
                {
                    count++;
                    prev = position[i];
                }
            }
            if (count >= m)
            {
                start = mid + 1;
            }
            else
            {
                end = mid - 1;
            }
        }
        return end;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    auto ans = obj.maxDistance({79, 74, 57, 22}, 4);
    cout << ans;
    return 0;
}