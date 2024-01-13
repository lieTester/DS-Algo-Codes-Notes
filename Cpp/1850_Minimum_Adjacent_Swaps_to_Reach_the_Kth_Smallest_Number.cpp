#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    /*
    void next permutation
        from end we look for sudden break in incresing oreder from (left <<==to== right)
        if there is:
            1 then we took the break index and look the greater elements from nums[breakindex]<nums[(left <<==to== right)].
            2 after we get first we swap both of then, sort all elem after breakindex.
        else:
            sort the array in ascending

    after k permutation we are going to use bubble short which help us to come back to the number before k permutation, how?
        first we look on which index both the number are not matching in temp[i]!=nums[i]:
            1 now we look in temp where is that number is present in temp, while(temp[j]!=nums[i])j++;
            2 after this we add ans+=j-i; <<these many swap for ith nuber in nums.
            3 use bubble sort to reverse nextPremutaion effect by 1, from(temp[i] to temp[j])


    */
    void nextPermutation(string &nums)
    {
        int n = nums.size() - 1, i;
        for (i = n - 1; i >= 0; --i)
        {
            if (nums[i] < nums[i + 1])
                break;
        }
        if (i != -1)
        {
            int j;
            for (j = n; j > i; --j)
            {
                if (nums[i] < nums[j])
                    break;
            }
            swap(nums[i], nums[j]);
            sort(nums.begin() + i + 1, nums.end());
        }
    }
    int getMinSwaps(string nums, int k)
    {

        string temp = nums;
        while (k--)
            nextPermutation(temp);
        int ans = 0;
        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] != temp[i])
            {
                int j = i + 1;
                while (nums[i] != temp[j])
                    j++; // this is to create bubble sort area from i to j
                ans += j - i;
                while (j != i)
                    swap(temp[j], temp[j - 1]), --j; // 1 bubble sort == nextPremutation--, and we get total swaps
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

    auto t = obj.getMinSwaps("5489355142", 4);
    cout << t;
    return 0;
}