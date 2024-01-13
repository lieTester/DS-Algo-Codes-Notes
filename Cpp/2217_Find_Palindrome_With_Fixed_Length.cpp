#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    vector<long long> kthPalindrome(vector<int> queries, int intLength)
    {
        /*
        logic is we can found range that how many palindrome num exist of  intLength
        if its querie is in range we find
          we calculate range with simple math:
              half = (intLength+1)/2;  to handel odd length palindrome we use +1/2
              L= (10^(half-1));  //same as we get range of integer like 2^(32-1)<->(2^32)-1
              R= (10^half)-1;

              secondHalfString=firstHalfString= to_string(L+(querie-1));
              reverse(secondHalfString.begin(),secondHalfString.end());
              ans.push_back(stoi(firstHalfString+secondHalfString.substr(intLength%2)));

                why modulo because if intLength is odd
                eg:- intLength=1, querie=3,  firstHalf= 1+(3-1), secondHalf= firstHalf
                     now firstHalf == secondHalf if we add them ans become 33 but we want ans of length 1 and that should be 3 only.
                     so before assign firstHalf to secondHalf we modulo 2: firstHalf(0,1/2) ==> which is empty string so ans become 3

        else querie out of range -1
        */

        long long half = (intLength + 1) / 2;
        long long l = pow(10, half - 1);
        long long r = pow(10, half) - 1;
        string firstHalf, secondHalf;
        vector<long long> ans;
        for (int q : queries)
        {
            if (q <= (r - l + 1))
            {
                secondHalf = firstHalf = to_string(l + (q - 1));
                reverse(secondHalf.begin(), secondHalf.end());

                ans.push_back(stoll(firstHalf + secondHalf.substr(intLength % 2)));
            }
            else
            {
                ans.push_back(-1);
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
    auto ans = obj.kthPalindrome({1, 2, 3, 4, 5, 90}, 3);
    // cout << ans;
    return 0;
}