import sys
from typing import List
sys.stdin =open('./input.txt','r')
sys.stdout =open('./output.txt','w')


class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        def memo(nums,n):
            if(n<=0):
                return 0
            if(dp[n]!=-1):
                return dp[n]

            idx=n
            points=0
            while idx>0 and nums[n-1]==nums[idx-1]:
                idx-=1
                points+=nums[n-1]
            idx2=idx
            while idx2>0 and nums[n-1] ==nums[idx2-1]+1:
                idx2-=1

            points+=memo(nums,idx2)
            points=max(points,memo(nums,idx))

            dp[n]=points
            return points


        nums.sort()
        dp=[-1]*(len(nums)+1)
        return memo(nums,len(nums))



        

def main():
    ob=Solution()
    # grid=[[0,6,0],[5,8,7],[0,9,0]]
    grid=[2, 2, 3, 3, 3, 4]
    ans=ob.deleteAndEarn(grid)
    print(ans)


if __name__ == "__main__":
    main()