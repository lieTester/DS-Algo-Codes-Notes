package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

// import java.math.*;
public class solution {

    public int[][] restoreMatrix(int[] rowSum, int[] colSum) {
        int m = rowSum.length;
        int n = colSum.length;
        int ans[][] = new int[m][n];
        // just become greedy and take minimum minus is from maximum
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (rowSum[i] < colSum[j]) {
                    ans[i][j] = rowSum[i];
                    colSum[j] -= rowSum[i];
                    rowSum[i] = 0;
                } else {
                    ans[i][j] = colSum[j];
                    rowSum[i] -= colSum[j];
                    colSum[j] = 0;
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
            int grid1[] = { 5, 7, 10 };
            int grid2[] = { 8, 6, 8 };
            solution ob = new solution();
            int[][] ans = new int[grid1.length][grid2.length];
            ans = ob.restoreMatrix(grid1, grid2);
            for (int i = 0; i < grid1.length; i++) {
                for (int j = 0; j < grid2.length; j++) {
                    op.print(ans[i][j]);
                    op.print("\t");
                }
                op.println();
            }
        }
    }
}