// { Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

int main()
{

#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif

    int t;
    cin >> t;
    while (t--)
    {
        int n, ans, t = 0, count = 0, i, index;
        bool f = false;
        vector<int> arr;
        cin >> n;
        for (i = 0; i < n; i++)
        {
            cin >> t;
            if (t == 1)
            {
                count++;
                index = i;
            }
            arr.push_back(t);
        }
        if (count == 0 || count > 1)
        {
            cout << "NO" << endl;
            continue;
        }

        // rolling array
        for (i = index + 1; i < index + n; i++)
        {
            if (arr[i % n] > arr[(i - 1) % n] && arr[i % n] - arr[(i - 1) % n] > 1)
            {
                f = true;
                break;
            }
        }
        if (f)
            cout << "NO" << endl;
        else
            cout << "YES" << endl;
    }

    return 0;
}
