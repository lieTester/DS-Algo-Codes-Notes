#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    vector<int> findClosestElements(vector<int> arr, int k, int x)
    {
        int l, r, mid, temp = 0;
        l = 0, r = arr.size() - 1;
        if (k > r + 1)
            return {};
        while (l <= r)
        {
            mid = (l + r) / 2;
            if (arr[mid] == x)
            {
                temp = mid;
                break;
            }
            if (x < arr[mid])
                r = mid - 1;
            else
                l = mid + 1;
            if (abs(arr[temp] - x) > abs(arr[mid] - x))
                temp = mid;
        }
        l = temp - 1;
        r = temp + 1;
        vector<int> ans;

        ans.push_back(arr[temp]);
        while ((l >= 0 || r < arr.size()) && ans.size() < k)
        {
            if (l >= 0 && r < arr.size() && (x - arr[l]) <= (arr[r] - x))
                ans.push_back(arr[l--]);
            else if (l >= 0 && r < arr.size() && (x - arr[l]) > (arr[r] - x))
                ans.push_back(arr[r++]);
            else if (l >= 0)
                ans.push_back(arr[l--]);
            else
            {
                ans.push_back(arr[r++]);
            }
        }

        sort(ans.begin(), ans.end());
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
    auto t = obj.findClosestElements({1, 2, 3, 4, 5}, 4, 3);
    for (int i : t)
        cout << i << " ";
    return 0;
}