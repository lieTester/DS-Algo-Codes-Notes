#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    /*
        the point according to question we want all ones together right,
        so first we calculate total ones, with this totalones window we calculte max one present in windowOfOnes.size() .
        Because the end have one count to be in same group we make array circular, how?
        sizeofArray*2 and access element in i%sizeofArray
        and finally minus all the maxOnes in windowOfOnes.size() from totalOnes

    */
    int minSwaps(vector<int> nums)
    {
        int ttlOnes = count(nums.begin(), nums.end(), 1);
        int n = nums.size();
        int groupOfOnes = 0, maxGroupOfOnes = 0;
        for (int i = 0, j = 0; i < n * 2; i++)
        {
            if (nums[i % n])
                ++groupOfOnes;

            if (i >= ttlOnes)
            {
                if (nums[j % n])
                    --groupOfOnes;
                maxGroupOfOnes = max(maxGroupOfOnes, groupOfOnes);
                ++j;
            }
        }

        return ttlOnes - maxGroupOfOnes;
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

    auto t = obj.minSwaps({0, 1, 1, 1, 0, 0, 1, 1, 0});
    cout << t;
    return 0;
}