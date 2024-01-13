#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    int nthUglyNumber(int n)
    {
        vector<int> u(n);
        u[0] = 1;

        /*
            our algo is we want only the number that multiple of 2,3 or 5 so
            we make an array of n size and add 1 default init
            now, we make three index point i->2, j->3, k->5 initially all pointing to zero(0) index which has 1 at start,
            we take minm of  min(u[i]*2, u[j]*3,  u[k]*5);
            which one has minimum we add it to u[fill]=minm, and also increse the pointer of (2or3or5)<=>(i,j,k) by which we get minm,
            if the minmimun comes from more than 2 index point,
            for suppose i=2,u[2]=3,so u[i]*2=6 and j=1,u[1]=2,so u[j]*3=6  both give 6 so we increse both i and j index

        */
        int two, three, five;
        for (int i = 0, j = 0, k = 0, fill = 1; fill < n; fill++)
        {
            two = 2 * u[i];
            three = 3 * u[j];
            five = 5 * u[k];

            u[fill] = min({two, three, five});
            if (u[fill] == two)
                i++;
            if (u[fill] == three)
                j++;
            if (u[fill] == five)
                k++;
        }
        return u[n - 1];
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;

    auto t = obj.nthUglyNumber(10);
    return 0;
}