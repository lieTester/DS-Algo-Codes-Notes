#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    int minSumOfLengths(vector<int> arr, int target)
    {
        int n = arr.size();
        vector<int> pre(n, INT_MAX);
        int sum = 0;
        int ans = INT_MAX, preMin = INT_MAX;
        for (int i = 0, j = 0; i < n; i++)
        {
            sum += arr[i];
            while (sum > target)
                sum -= arr[j++];
            if (sum == target)
            { // this part is to store the target sum length as well prevent collision of 2 sub-array
                if (j > 0 && pre[j - 1] != INT_MAX)
                {
                    // we are looking for if pre[j-1] for prevent overlapping because [2,1,3,3,2,1] in this 3,3 and 3,2,1 make 5
                    // but they are overlapped so we dont want overlapp similarly [2,1,3,3,2,1,3] int 3,3 and 2,1,3 make 5 and its
                    // not overlapping as well so the preMin help us to always get minm at pre[j-1]
                    ans = min(ans, pre[j - 1] + i - j + 1);
                }
                preMin = min(preMin, i - j + 1); // this is important becuse we want length of target subarrays as small as possible
            }
            pre[i] = preMin;
        }

        if (ans == INT_MAX)
            return -1;
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

    auto t = obj.minSumOfLengths({4, 3, 2, 6, 2, 3, 4}, 5);
    cout << t;
    return 0;
}