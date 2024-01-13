#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    /* can be many valid ans easy but treaky
        we start from last index and se if any max value present before that index.
        if(yes)
            then add maxValueIndx+1 to ans and ithIndex aswell;
            then make 2 reverse operation first from 0-maxValueIndex and 2 0 to ithIndex
        else
            don't do any thing


    */
    void reverse(vector<int> &arr, int l, int r)
    {
        while (l < r)
        {
            swap(arr[l], arr[r]);
            l++;
            r--;
        }
    }
    vector<int> pancakeSort(vector<int> arr)
    {
        vector<int> ans;
        for (int i = arr.size() - 1; i >= 0; --i)
        {
            int indx = i;
            for (int j = i - 1; j >= 0; --j)
            {
                indx = (arr[indx] < arr[j] ? j : indx);
            }
            if (indx != i)
            {
                ans.push_back(indx + 1);
                ans.push_back(i + 1);
                reverse(arr, 0, indx);
                reverse(arr, 0, i);
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
    auto ans = obj.pancakeSort({3, 2, 4, 1});
    // cout << ans;
    return 0;
}