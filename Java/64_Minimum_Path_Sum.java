package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

// import java.math.*;
public class solution {

    public int minPathSum(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        // tabulation
        // its not right way to change actual data use dp insted
        for (int i = 0; i < m; i++) {

            for (int j = 0; j < n; j++) {
                if (i == 0 && j == 0)
                    continue;
                else if (i == 0)
                    grid[i][j] += grid[i][j - 1];
                else if (j == 0)
                    grid[i][j] += grid[i - 1][j];
                else {
                    grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
                }
            }
        }

        return grid[m - 1][n - 1];
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {

            int grid[][] = { { 1, 3, 1 }, { 1, 5, 1 }, { 4, 2, 1 } };
            solution ob = new solution();
            int ans = ob.minPathSum(grid);
            op.println(ans);
        }
    }
}
