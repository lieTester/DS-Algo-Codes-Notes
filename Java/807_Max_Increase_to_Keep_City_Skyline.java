package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

// import java.math.*;
public class solution {

    public int maxIncreaseKeepingSkyline(int[][] g) {
        int m = g.length, n = g[0].length;
        int[] row = new int[m];
        int[] col = new int[n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                col[j] = Math.max(col[j], g[i][j]);
                row[i] = Math.max(row[i], g[i][j]);
            }
        }
        int ans = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                // how much we are increasing
                ans += Math.min(col[j], row[i]) - g[i][j];
                g[i][j] = Math.min(col[j], row[i]);
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
            int grid[][] = { { 3, 0, 8, 4 }, { 2, 4, 5, 7 }, { 9, 2, 6, 3 }, { 0, 3, 1, 0 } };
            solution ob = new solution();
            int ans = ob.maxIncreaseKeepingSkyline(grid);
            op.println(ans);
        }
    }
}