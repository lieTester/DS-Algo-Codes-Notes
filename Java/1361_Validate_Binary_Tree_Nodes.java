package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    /*
     * Its easy just think of as a directed graph with root node
     * if(thier is cycle || or graph is disconnected (multiple tree with
     * root node))return false
     * else true
     * 
     */
    public boolean dfs(List<List<Integer>> adj, Boolean[] vis, int node) {
        if (node >= adj.size() || node == -1)
            return true;
        if (vis[node] != null)
            return false;
        vis[node] = true;
        for (int i : adj.get(node)) {
            if (dfs(adj, vis, i) == false)
                return false;
        }
        return true;
    }

    public boolean validateBinaryTreeNodes(int n, int[] lc, int[] rc) {
        if (n < 2)
            return true;
        List<List<Integer>> adj = new ArrayList<>();
        Boolean[] vis = new Boolean[n];
        int[] indeg = new int[n];

        for (int i = 0; i < n; ++i) {
            adj.add(new ArrayList<>());
            indeg[i] = 0;
        }
        for (int i = 0; i < n; ++i) {
            if (lc[i] != -1)
                adj.get(i).add(lc[i]);
            if (rc[i] != -1)
                adj.get(i).add(rc[i]);
            if (lc[i] != -1)
                indeg[lc[i]]++;
            if (rc[i] != -1)
                indeg[rc[i]]++;
        }

        for (int i = 0; i < n; ++i) {
            // call dfs where indegree of node is zero and atleast one child
            // why? because 0 indegree can only be root node
            if (indeg[i] == 0 && adj.get(i).size() > 0) {
                if (dfs(adj, vis, i) == false)
                    return false;
                else
                    break;
            }
        }
        for (int i = 0; i < n; ++i) {
            if (vis[i] == null)
                return false;
        }
        return true;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int nums1[] = { 1, -1, 3, -1 };
            int nums2[] = { 2, -1, -1, -1 };

            op.println(obj.validateBinaryTreeNodes(4, nums1, nums2));

        }
    }

}