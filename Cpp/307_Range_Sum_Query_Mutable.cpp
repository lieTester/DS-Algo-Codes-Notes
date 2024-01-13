#include <bits/stdc++.h>
using namespace std;
class segtree
{
public:
    int start, end, sum;
    segtree *right, *left;
    segtree(int s, int e)
    {
        start = s;
        end = e;
    }
};
class NumArray
{
private:
    segtree *root = nullptr;

public:
    NumArray(vector<int> nums)
    {
        root = build(0, nums.size() - 1, nums);
    }

    void update(int index, int val)
    {
        update(index, val, root);
    }

    int sumRange(int left, int right)
    {
        return getAns(left, right, root);
    }

    segtree *build(int l, int r, vector<int> &nums)
    {
        if (l > r)
            return nullptr;

        segtree *node = new segtree(l, r);
        if (r == l)
        {
            node->sum = nums[l];
            return node;
        }
        int mid = (r + l) / 2;
        node->left = build(l, mid, nums);
        node->right = build(mid + 1, r, nums);
        node->sum = (node->right ? node->right->sum : 0) + (node->left ? node->left->sum : 0);

        return node;
    }
    void update(int indx, int val, segtree *node)
    {
        if (node->start == node->end && node->start == indx)
        {
            node->sum = val;
            return;
        }
        int mid = node->start + (node->end - node->start) / 2;

        if (indx <= mid)
            update(indx, val, node->left);
        else
            update(indx, val, node->right);
        node->sum = (node->right ? node->right->sum : 0) + (node->left ? node->left->sum : 0);
    }
    int getAns(int l, int r, segtree *node)
    {
        if (node == nullptr)
            return 0;
        if (node->start == l && node->end == r)
            return node->sum;

        int mid = (node->end + node->start) / 2;

        if (r <= mid)
            return getAns(l, r, node->left);
        else if (l > mid)
            return getAns(l, r, node->right);

        return getAns(l, mid, node->left) + getAns(mid + 1, r, node->right);
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    NumArray *obj = new NumArray({1, 3, 5});

    auto t = obj->sumRange(0, 2);
    cout << t << endl;
    obj->update(1, 2);
    t = obj->sumRange(0, 2);
    cout << t << endl;
    return 0;
}