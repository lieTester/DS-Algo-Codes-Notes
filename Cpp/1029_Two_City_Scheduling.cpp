#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    /*
     * The basic sorting won't work here why?
     * Becuse on basic sorting we either sort by 0th elem or 1st position, and after that we go for minimums which is wrong have a look on below eg:
     *  [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
     *  After sort
     *  [[184,139],[259,770],[448,54],[577,469],[840,118],[926,667]]
     *  1   Now what ever we try it won't for either you choose first n from 0th city and then remaning fron 1st city
     *  2   Or we make two pointer f=size/2,l=size/2 and now choose minimum from 0th and 1st .
     *      if we choose 0th decrese --f else 1st --l, stiil we end up with wrong ans.
     *
     * The Solution either of sorting from 0th or 1st won't work than what will ?
     * ans:- Sort on maxmimum diffrence between both cities prices.
     *      After Sorting ==>> [[840,118],[259,770],[448,54],[926,667],[577,469],[184,139]]
     *      Now use the Second point of (f and l).
     *
     * f=3,l=3 ,([840,118]) ==>>minm is 118 so --l
     * f=3,l=2 ,([259,770]) ==>>minm is 259 so --f
     * f=2,l=2 ,([448,54]) ==>>minm is 54 so --l
     * f=2,l=1 ,([926,667]) ==>>minm is 667 so --l
     * f=2,l=0 ,([926,667]) ==>>minm is 667 so --l
     * f=2,l=0,([577,469]) ==>>no choise 577 so --f
     * f=2,l=0,([184,139]) ==>>no choise 184 so --f
     * ans = 1859;
     */
    static bool compare(vector<int> &a, vector<int> &b)
    {
        return abs(a[0] - a[1]) > abs(b[0] - b[1]);
    }
    int twoCitySchedCost(vector<vector<int>> costs)
    {
        sort(costs.begin(), costs.end(), compare);
        int ans = 0;
        int f = costs.size() / 2, l = costs.size() / 2;
        for (auto i : costs)
        {
            if (f && l)
            {
                if (i[0] > i[1])
                    ans += i[1], --l;
                else
                    ans += i[0], --f;
                ;
            }
            else if (f)
            {
                ans += i[0], --f;
            }
            else
            {
                ans += i[1], --l;
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
    //

    auto t = obj.twoCitySchedCost({{259, 770}, {448, 54}, {926, 667}, {184, 139}, {840, 118}, {577, 469}});
    cout << t;
    return 0;
}