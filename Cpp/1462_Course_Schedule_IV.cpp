#include <bits/stdc++.h>
using namespace std;
typedef vector<vector<int>> vvi;
typedef vector<vector<bool>> vvb;
class Solution
{
public:
    // to do current course we want to complete end course we are able to do it then return true
    // T O(q*depthToFindEnd)or O(Q*N) ,Q=queries,N=node we visit
    // why we are creating vis again and agin because,
    // pre 1=>[2,4,6], 2=>[4], 4=>[], 6[3]
    // if se we want to reach 1->3 and first 1->2, then 2->4 and not further mean 4 cannot give us answere, so in next iteration
    // of 1==>[2,4,6] we are not going to check for 4 again beacuse it's visited and it cannot give answere
    // now think this point as may be 4 has n neighbour nodes and cannot give us answere then we have to traverse n agian.
    // with creating vis queries.size() time gives us correct answere in speed
    bool dfs(int crCrs, int endCrs, vvi &pre, vector<bool> &vis)
    {

        if (crCrs == endCrs)
            return true;
        if (vis[crCrs])
            return false;

        vis[crCrs] = true;
        for (int i = 0; i < pre[crCrs].size(); i++)
            if (dfs(pre[crCrs][i], endCrs, pre, vis))
                return true;

        return false;
    }

    vector<bool> checkIfPrerequisite(int nC, vvi prerequisites, vvi queries)
    {
        // vector<bool> ans(queries.size(),false);
        // vvi pre(nC,vector<int>(0));

        // for(int i=0;i<prerequisites.size();i++){
        //     pre[prerequisites[i][0]].push_back(prerequisites[i][1]);
        // }

        // for(int i=0;i<queries.size();i++){
        //     vector<bool> vis(nC,false);
        //     if(dfs(queries[i][0],queries[i][1],pre,vis)){
        //         ans[i]=true;
        //     }
        // }
        // return ans;

        // Flyod Warshall algo n^3
        // insted of path size only check path exist or not
        // adjacency matrix
        vvb adjMat(nC, vector<bool>(nC, false));
        vector<bool> ans;
        for (auto i : prerequisites)
        {
            adjMat[i[0]][i[1]] = 1;
        }
        for (int k = 0; k < nC; k++)
        {
            for (int i = 0; i < nC; i++)
            {
                for (int j = 0; j < nC; j++)
                {

                    if (!adjMat[i][j])
                        adjMat[i][j] = (adjMat[i][k] && adjMat[k][j]);
                }
            }
        }

        for (auto i : queries)
        {
            ans.push_back(adjMat[i[0]][i[1]]);
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
    auto t = obj.checkIfPrerequisite(3, {{1, 2}, {1, 0}, {2, 0}}, {{1, 0}, {1, 2}});

    return 0;
}