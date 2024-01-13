#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<vector<int>> fourSum(vector<int> nums, int target) {
        sort(begin(nums),end(nums));
        int n=size(nums);
        vector<vector<int>> ans;
        for(int i=0;i<n-3;++i){
            if(i>0 && nums[i]==nums[i-1]) continue;
            for(int j=i+1;j<n-2;++j){
                if(j>i+1 && nums[j]==nums[j-1]) continue;

                int k=j+1,l=n-1;
                while(k<l){
                    long temp= 1LL*nums[i]+nums[j]+nums[k]+nums[l];
                    if(temp==target){
                        ans.push_back({nums[i],nums[j],nums[k],nums[l]});
                        do{k++;}while(nums[k]==nums[k-1] && k<l);
                        do{l--;}while(nums[l]==nums[l+1] && k<l);
                    }
                    else if(temp<target) ++k;
                    else --l;
                }
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
    auto ans = obj.fourSum({1,0,-1,0,-2,2},0);
    // cout << ans;
    return 0;
}