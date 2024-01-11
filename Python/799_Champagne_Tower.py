import sys
sys.stdin =open('./input.txt','r')
sys.stdout =open('./output.txt','w')

class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        
        """
            we are going to make pascal triangle
                        1
                      1   1
                    1   2   1
                  1   3   3   1
                1   4   6   4   1
        """
        dp=[]
        dp.append(poured)
        while(query_row):
            query_row-=1
            nextpor=max((dp[0]-1)/2,0)
            temp=[nextpor]
            # work from len=2
            for i in range(1,len(dp)):
                nextpor=max((dp[i-1]-1)/2,0)+max((dp[i]-1)/2,0)
                temp.append(nextpor)
            temp.append(temp[0])
            dp=temp
        
        return min(dp[query_glass],1)
             

        
        
        

def main():
    ob=Solution()
    ans=ob.champagneTower(2,1,1)
    print(ans)


if __name__ == "__main__":
    main()
