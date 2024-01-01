
from bisect import bisect_right
from collections import Counter, defaultdict
import sys
from typing import List
sys.stdin =open('./input.txt','r')
sys.stdout =open('./output.txt','w')



class Solution:
    def canFinish(self, nCrs: int, pre: List[List[int]]) -> bool:
        adj={i:[] for i in range(nCrs)}
        for node1,node2 in pre:
            adj[node1].append(node2)
        
        calc=[]
        vis=[False]*nCrs
        def dfs(node):
            if node in calc:
                return True
            if vis[node]:
                return False
            
            vis[node]=True
            
            for i in adj[node]:
                if dfs(node)==False:
                    return False
            vis[node]=False
            calc.append(node)
                
            return True
        for i in range(nCrs):
            if dfs(i)==False:
                return False
            
        return True

# def main():
#     pass
    


if __name__ == "__main__":
    # main()
    ob=Solution()
    ans= ob.canFinish(2,[[1,0]])
    print(ans)