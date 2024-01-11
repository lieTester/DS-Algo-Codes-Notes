import sys
from typing import List
sys.stdin =open('./input.txt','r')
sys.stdout =open('./output.txt','w')


class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m=len(grid)
        n=len(grid[0])
        for i in range(0,m):
            for j in range(0,n):
                if i == 0 and j == 0:
                    continue
                elif i == 0:
                    grid[i][j] += grid[i][j - 1]
                elif j == 0:
                    grid[i][j] += grid[i - 1][j];
                else:
                    grid[i][j] += min(grid[i - 1][j], grid[i][j - 1]);
                
        
        return grid[m-1][n-1]
         
        

def main():
    pass
    ob=Solution()
    grid=[[1,3,1],[1,5,1],[4,2,1]]
    ans=ob.minPathSum(grid)
    print(ans)


if __name__ == "__main__":
    main()