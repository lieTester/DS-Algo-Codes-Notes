#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    vector<int> pathInZigZagTree(int label)
    {
        int level, count;
        level = count = 0; // count is temprary just to get level
        while (count < label)
        {
            count += (1 << level);
            ++level;
        }
        vector<int> ans(level, label);
        int start, end, diff;
        /* now solution is that we get the difrense bw the label and max value in that level
            after that we add with start value and divide by 2 why so


            if we are given a normal tree like

                        1                                           1
                       / \                                         / \
                      2   3                                       3   2
                     / \  /\                                     / \ / \
                    4  5 6  7                                   4  5 6  7

            we get parent of every node just by             in this tree we cannot do parent=n/w
            parent=n/2 eg: 7/2=3,5/2=2                      What we do?

            we can find complement of node mean if we look carefully :
            praent of node in right tree is parent of same distance node in left tree

            right
            parent   child                                  parent   child
              7         3                                     7         2
              6         3                                     6         2
              5         2                                     5         3
              4         2                                     4         3

              just at swap position so we find complement with
              diffrence=(maxValueAtLevel-1)-label
              ans= (SamllestValueAtLevel+diffrence)/2;
              and change label=ans;
        */
        while (level > 1)
        {
            start = 1 << (level - 1);
            end = (1 << level) - 1;
            diff = end - label;
            label = ans[level - 2] = (start + diff) / 2;

            --level;
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
    auto t = obj.pathInZigZagTree(14);
    return 0;
}