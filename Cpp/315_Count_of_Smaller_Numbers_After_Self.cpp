#include <bits/stdc++.h>
using namespace std;


class Solution {
    vector<int>Bi_tree;
public:
    void update(int i){
        while(i<Bi_tree.size()){
            Bi_tree[i]+=1;
            i+=(i&-i);
        }
    }
    int getSmaller(int i){
        // we cannot count current i as smaller its equal 
        // in [-1,-1] this case on second call we get [1,0] we make call to i-1;
        // if we always intitalize the we did we get correct ans
        int s=0;
        i-=1;
        while(i>0){
            s+=Bi_tree[i];
            i-=(i&-i);
        }
        return s;
    }
    vector<int> countSmaller(vector<int> nums) {
        // why we are using 10000*2+1 size because we have range from -10^4 to 10^4
        // so to make index of negative number also we always send nums[i]+10^4
        // for eg if arr is [2,-3,4,3,-8]
        // in above array case we -3 store at index Bi_tree[(10000-3)==9997]
        // in above array case we 3 store at index Bi_tree[(10000+3)==10003]
        // so are maintaning sequence  -inf to +inf in range -10^4 to 10^4
        
        int n=*max_element(begin(nums),end(nums));
        n=max(n,abs(*min_element(begin(nums),end(nums))) );
        cout<<n<<endl;
        Bi_tree.resize((2*n)+2,0);
        vector<int>ans(nums.size());
        for(int i=nums.size()-1;i>=0;--i){
            ans[i]=getSmaller(nums[i]+n+1);
            update(nums[i]+n+1);
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

    auto ans=obj.countSmaller({0,-1,-1});
    // cout << ans;
    return 0;
}