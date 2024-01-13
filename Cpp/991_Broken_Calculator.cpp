#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    /*
        for X < Y, if we start from x, then we don't have a clue how should we pick -1 or *2
        but if we start from y, and look at it odd-eveness, then we would have a clue
        if y is odd, then the last operation must be -1, no other approaches
        if y is even, then we have two choices: -1 or * 2.
        To get last y from last second y2, we have two ways: y2 * 2 or y2 * 2 - 1 - 1
        y2 * 2 -1 - 1 = (y2-1) * 2, and (y2-1) * 2 can save us one operation.
        Hence for the last y, we will always pick /2 when it is even


    */
    int brokenCalc(int start, int target)
    {
        if (start == target)
            return 0;
        if (start > target)
            return start - target;
        if (target & 1)
            return brokenCalc(start, (target + 1) / 2) + 2;
        return brokenCalc(start, target / 2) + 1;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;

    auto t = obj.brokenCalc(5, 8);
    cout << t;
    return 0;
}