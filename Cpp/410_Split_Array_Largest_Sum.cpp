#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    // kind of koko eat banana
    /*

       we make binary search on max element in array till total sum of array
       we take sum=0,
       and keep increasing untill it < mid
          (bcs after that we are going towards the maxsum among all subarrays although we want minisum)
          and every time we get sum>mid we ++count so weget understanding that we have to dived array in m
       if(count>m) means according to mid we cannot divide array in m parts so
          start=mid+1
       else (minimize the maximum sum subarray)
          ans=min(ans,mid)
          end=mid-1  (try to minimize sum subarray what we have now)

    */
    int splitArray(vector<int> nums, int m)
    {
        if (m == nums.size())
            return *max_element(nums.begin(), nums.end());
        int start = *max_element(nums.begin(), nums.end());
        int end = accumulate(nums.begin(), nums.end(), 0);
        int ans = end, mid, count, sum, i;
        while (start <= end)
        {
            mid = start + (end - start) / 2;
            count = 1; // 1 <= m <= min(50, nums.length) base case
            sum = 0;
            for (i = 0; i < nums.size(); ++i)
            {
                sum += nums[i];
                if (sum > mid)
                {
                    ++count;
                    sum = nums[i];
                }
                if (count > m)
                    break;
            }

            if (count > m)
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
    auto ans = obj.splitArray({5, 1, 3, 5, 10, 7, 4, 9, 2, 8}, 1);
    cout << ans;
    return 0;
}