#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    // another application of knapsack your code
    // first we get all the perfect square less than target then use concept of unbound knapsack to find target sum
    int help(vector<int> &num, vector<vector<int>> &dp, int indx, int target)
    {
        if (target == 0)
            return 0;
        if (indx >= num.size())
            return INT_MAX / 2;
        if (dp[indx][target] != -1)
            return dp[indx][target];
        int count = INT_MAX / 2;
        if (num[indx] <= target)
        {
            count = min(help(num, dp, indx, target - num[indx]) + 1, help(num, dp, indx + 1, target));
        }
        else
        {
            return INT_MAX / 2; // because over nums is already sorted so if num[index]>target indx+1 definately be greater
        }
        return dp[indx][target] = count;
    }
    int numSquares(int target)
    {
        // vector<int>num;
        // for(int i=1;i*i<=target;i++){
        //     num.push_back(i*i);
        // }
        // int n=num.size();
        // vector<vector<int>>dp(n+1,vector<int>(target+1,-1));
        // return help(num,dp,0,target);

        // this code is of LIS  will check if  dp[i-(j*j)+1] is minm then dp[i]
        if (target < 4)
            return target;
        vector<int> dp(target + 1, INT_MAX);
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 3;
        for (int i = 4; i <= target; i++)
        {
            for (int j = 1; j * j <= i; j++)
            {
                dp[i] = min(dp[i], dp[i - (j * j)] + 1);
            }
        }
        return dp[target];
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;

    auto t = obj.numSquares(100);
    cout << t;
    return 0;
}