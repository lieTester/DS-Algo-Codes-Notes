package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

public class solution {

    int temp = 0;
    boolean connected = false;

    void dfs(int[][] g, Boolean[][] v, int i, int j) {
        if (i >= g.length || i < 0 || j >= g[0].length || j < 0) {
            connected = true;
            return;
        }

        if (v[i][j] != null || g[i][j] == 0)
            return;
        v[i][j] = true;
        ++temp;
        dfs(g, v, i + 1, j);
        dfs(g, v, i - 1, j);
        dfs(g, v, i, j + 1);
        dfs(g, v, i, j - 1);
    }

    public int numEnclaves(int[][] g) {
        Boolean vis[][] = new Boolean[g.length][g[0].length];
        int ans = 0;
        for (int i = 0; i < g.length; ++i) {
            for (int j = 0; j < g[0].length; ++j) {
                if (g[i][j] == 1 && vis[i][j] == null) {
                    connected = false;
                    temp = 0;
                    dfs(g, vis, i, j);
                    if (connected == false)
                        ans += temp;
                }
            }
        }
        return ans;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {

            // int x = ip.nextInt();
            // int y = ip.nextInt();
            // op.println(x + y);
            int grid[][] = { { 0, 0, 0, 0 }, { 1, 0, 1, 0 }, { 0, 1, 1, 0 }, { 0, 0, 0, 0 } };
            solution ob = new solution();
            int ans = ob.numEnclaves(grid);
            op.println(ans);
        }
    }
}