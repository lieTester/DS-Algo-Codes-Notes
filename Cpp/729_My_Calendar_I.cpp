#include <bits/stdc++.h>
using namespace std;
// try again

class segtree
{
public:
    int start, end;
    segtree *right, *left;
    segtree(int s, int e)
    {
        start = s;
        end = e;
        right = left = nullptr;
    }
};
class MyCalendar
{
private:
    segtree *root;

public:
    MyCalendar()
    {
        root = nullptr;
    }

    bool book(int start, int end)
    {
        if (getAns(start, end, root))
        {
            root = update(start, end, root);
            return true;
        }
        return false;
    }

    segtree *update(int &st, int &ed, segtree *node)
    {
        if (!node)
        {
            // book the event dates
            return new segtree(st, ed);
        }
        if (node->start >= ed)
        {
            // if ed date of current event is greater than start mean we have mode left of this start date to book
            node->left = update(st, ed, node->left);
        }
        else if (node->end <= st)
        {
            // if st date of current event is greater than end mean we have mode right of this end date to book
            node->right = update(st, ed, node->right);
        }
        return node;
    }
    bool getAns(int &st, int &ed, segtree *node)
    {
        if (!node)
            return true; // mean date is not booked
        if (node->start >= ed)
        {
            // if ed date of current event is greater than start mean we have mode left of this start date to book
            return getAns(st, ed, node->left);
        }
        else if (node->end <= st)
        {
            // if st date of current event is greater than end mean we have mode right of this end date to book
            return getAns(st, ed, node->right);
        }
        // this codition mean its a double booking
        return false;
    }
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * MyCalendar* obj = new MyCalendar();
 * bool param_1 = obj->book(start,end);
 */
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    MyCalendar *obj = new MyCalendar();

    auto t = obj->book(10, 20);
    cout << t << " ";
    t = obj->book(15, 25);
    cout << t << " ";
    t = obj->book(25, 40);
    cout << t << " ";
    return 0;
}