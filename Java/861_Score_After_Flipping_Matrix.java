package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

// import java.math.*;
public class solution {

    public int matrixScore(int[][] g) {
        int m = g.length;
        int n = g[0].length;

        // for row the point is if first element of row is 0 then change toggle entire
        // row
        for (int i = 0; i < m; i++) {
            if (g[i][0] == 1)
                continue;
            for (int j = 0; j < n; j++)
                g[i][j] ^= 1;

        }
        int ans = 0, temp = 0;

        // for column wise toogle we check that it total 1 in column is already in
        // majority then we don't change
        // else toogle entire column
        for (int j = 0; j < n; j++) {
            temp = 0;
            for (int i = 0; i < m; i++)
                if (g[i][j] == 1)
                    temp++;

            if (temp >= (m - temp))
                continue;
            for (int i = 0; i < m; i++)
                g[i][j] ^= 1;
        }
        for (int i = 0; i < m; i++) {
            temp = 0;
            for (int j = 0; j < n; j++) {
                // basic way to make a number with bits
                temp += (g[i][j] << (n - j - 1));
                // cout<<g[i][j]<<" ";
            }
            ans += temp;
            // cout<<endl;
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
            int grid[][] = { { 0, 0, 1, 1 }, { 1, 0, 1, 0 }, { 1, 1, 0, 0 } };
            solution ob = new solution();
            int ans = ob.matrixScore(grid);
            op.println(ans);
        }
    }
}