import sys
from typing import List
sys.stdin =open('./input.txt','r')
sys.stdout =open('./output.txt','w')


class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int:
        def dfs(grid,r,c):
            if(r>=m or c>=n or c<0 or r<0  or grid[r][c]==0 or grid[r][c]==-1 ):
                return 0
 
            t=grid[r][c]
            grid[r][c]=-1
            temp =dfs(grid,r+1,c)
            temp =max(temp,dfs(grid,r-1,c))
            temp =max(temp,dfs(grid,r,c+1))
            temp =max(temp,dfs(grid,r,c-1))

            grid[r][c]=t
            return temp+grid[r][c]

             
        m, n = len(grid), len(grid[0])
        # we can also use vis for checking
        # vis = [[0] * n for _ in range(m)]
        ans=0
        for i in range(0,m):
            for j in range(0,n):
                if grid[i][j]!=0:
                    ans=max(ans,dfs(grid,i,j))

        return ans
            
         
        

def main():
    ob=Solution()
    # grid=[[0,6,0],[5,8,7],[0,9,0]]
    grid=[[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
    ans=ob.getMaximumGold(grid)
    print(ans)


if __name__ == "__main__":
    main()