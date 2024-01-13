#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    bool checkValidString(string s)
    {
        /*
            we have to use stack for inex to balence parantheses with start, how?
            we push each index of '(' and '*' in 2 diffrent stack
            if ')' comes:
                if '(' stack is not empty pop from it;
                else:
                    if '*' stack is not empty pop;
                    else don't have any '*' or '(' to balance current ')' bracket so return false;
            
            if '(' stack is not empty mean to bancle these empty openings we use star as closing:
                but if a '*'.top() > '('.top() means situatuion is like "*(" so it cannot be balance so return false;

            if after above condition size of '(' stack > 0 return false:
                means we have opening brackets without closing ones so return false;
            
            finally if we come this far mean string is balansed return true;


        */
        int count = 0;
        stack<int> op, st;
        for (auto i : s)
        {
            if (i == '(')
                op.push(count);
            else if (i == ')')
            {
                if (op.size())
                    op.pop();
                else
                {
                    if (st.size())
                        st.pop();
                    else
                        return false;
                }
            }
            else
            {
                st.push(count);
            }
            ++count;
        }
        while (op.size() && st.size())
        {
            if (op.top() > st.top())
                return false;
            op.pop();
            st.pop();
        }
        if (op.size())
            return false;
        return true;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;
    auto ans = obj.checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())");
    // cout << ans;
    return 0;
}