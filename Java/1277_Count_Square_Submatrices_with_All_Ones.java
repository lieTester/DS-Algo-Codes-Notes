package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

// import java.math.*;
public class solution {

    public int countSquares(int[][] mat) {
        for (int i = 1; i < mat.length; i++) {
            for (int j = 1; j < mat[0].length; j++) {
                if (mat[i][j] != 0)
                    mat[i][j] = Math.min(mat[i - 1][j - 1], Math.min(mat[i - 1][j], mat[i][j - 1])) + 1;
            }
        }
        int ans = 0;
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[0].length; j++) {
                if (mat[i][j] != 0)
                    ans += mat[i][j];
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
            int grid[][] = { { 0, 0, 0 }, { 0, 1, 0 }, { 0, 1, 0 }, { 1, 1, 1 }, { 1, 1, 0 } };
            solution ob = new solution();
            int ans = ob.countSquares(grid);
            op.println(ans);
        }
    }
}