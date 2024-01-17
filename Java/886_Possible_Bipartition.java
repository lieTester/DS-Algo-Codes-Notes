package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

public class solution {
    /*
     * simple union all neighbour nodes of ith node but,
     * before union check that jth neighbour of ith node don't lie in same group with ith node
     * if ith==jth so return false:
     * else uninon(ith[0],j);
     * 
     */
    int parent[], rank[];

    public int find(int x) {
        if (parent[x] == x)
            return x;
        return parent[x] = find(parent[x]);
    }

    public void _union(int u, int v) {
        u = find(u);
        v = find(v);
        if (rank[u] < rank[v]) {
            rank[v]++;
            parent[u] = v;
        } else {
            rank[u]++;
            parent[v] = u;
        }
    }

    public boolean possibleBipartition(int n, int[][] dislikes) {
        parent = new int[n];
        rank = new int[n];
        List<Integer> adj[] = new LinkedList[n + 1];
        for (int i = 0; i < n; i++) {
            adj[i] = new LinkedList<>();
            parent[i] = i;
            rank[i] = 0;
        }
        for (int i = 0; i < dislikes.length; i++) {
            adj[dislikes[i][0] - 1].add(dislikes[i][1] - 1);
            adj[dislikes[i][1] - 1].add(dislikes[i][0] - 1);
        }
        for (int i = 0; i < n; i++) {
            for (Integer j : adj[i]) {
                if (find(i) == find(j))
                    return false;
                _union(j, adj[i].get(0));
            }
        }
        return true;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {

            // int x = ip.nextInt();
            // int y = ip.nextInt();
            // op.println(x + y);

            int grid[][] = { { 1, 2 }, { 1, 3 }, { 2, 4 } };
            solution ob = new solution();
            boolean ans = ob.possibleBipartition(4, grid);
            op.println(ans);
        }
    }
}