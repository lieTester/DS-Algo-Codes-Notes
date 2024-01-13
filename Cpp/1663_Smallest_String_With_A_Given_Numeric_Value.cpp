#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    string getSmallestString(int n, int k)
    {
        int num = 26;
        string ans;
        char temp;
        for (int i = n - 1; i >= 0; --i)
        {
            while (k - num != i)
                --num;
            temp = char((num - 1) + 'a');
            ans += temp;
            k = k - num;
        }
        reverse(ans.begin(), ans.end());
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

    auto t = obj.getSmallestString(3, 27);
    cout << t;
    return 0;
}