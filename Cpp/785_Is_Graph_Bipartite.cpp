#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    /*
        in a simple sence a graph is bipartite if no 2 adjacent node has same color and we
        have only 2 color to color every node in graph.

        so while coloring nodes in graph we look if node we color and and adjacent node had the
        same color then this graph is not a bipartite

        we took 0 and 1 as two colors
    */
    bool help(vector<vector<int>> &graph, vector<int> &colors, int node, int cl)
    {
        if (colors[node] != -1)
        {
            // means if it is visited and color send by previous node this this node not same then this cannot be bipartite
            if (colors[node] == cl)
                return true;
            return false;
        }
        colors[node] = cl;
        for (auto i : graph[node])
        {
            if (!help(graph, colors, i, cl ^ 1))
                return false;
        }
        return true;
    }
    bool isBipartite(vector<vector<int>> graph)
    {
        int n = graph.size();
        vector<int> colors(n, -1);

        for (int i = 0; i < n; i++)
        {
            if (colors[i] == -1)
            {
                if (!help(graph, colors, i, 0))
                    return false;
            }
        }

        return true;
    }
};
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    Solution obj;

    auto t = obj.isBipartite({{1, 2, 3}, {0, 2}, {0, 1, 3}, {0, 2}});
    cout << t;
    return 0;
}