
#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    // same as get max sqaure size in 2d matrix
    int countSquares(vector<vector<int>> mat)
    {

        for (int i = 1; i < mat.size(); i++)
        {
            for (int j = 1; j < mat[0].size(); j++)
            {
                if (mat[i][j])
                    mat[i][j] = min({mat[i - 1][j - 1], mat[i - 1][j], mat[i][j - 1]}) + 1;
            }
        }
        int ans = 0;
        for (int i = 0; i < mat.size(); i++)
        {
            for (int j = 0; j < mat[0].size(); j++)
            {
                if (mat[i][j])
                    ans += mat[i][j];
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

    auto t = obj.countSquares({{0, 0, 0}, {0, 1, 0}, {0, 1, 0}, {1, 1, 1}, {1, 1, 0}});
    cout << t;
    return 0;
}
