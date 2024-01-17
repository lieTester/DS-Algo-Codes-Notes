package Java;
// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

// import java.math.*;
public class solution {
    public int help(int i, int j, int nums[], Integer dp[][]) {
        if (i > j)
            return 0;
        if (dp[i][j] != null)
            return dp[i][j];
        int ans = Integer.MIN_VALUE, l, r, t;
        for (int k = i; k <= j; k++) {
            l = help(i, k - 1, nums, dp);
            r = help(k + 1, j, nums, dp);
            t = (i - 1 >= 0 ? nums[i - 1] : 1) * nums[k] * (j + 1 < nums.length ? nums[j + 1] : 1);
            ans = Math.max(ans, l + r + t);
        }
        return dp[i][j] = ans;
    }

    public int maxCoins(int[] nums) {
        int n = nums.length;
        Integer dp[][] = new Integer[n + 1][n + 1];
        return help(0, n - 1, nums, dp);
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {

            // int x = ip.nextInt();
            // int y = ip.nextInt();
            // op.println(x + y);
            int grid[] = { 3, 1, 5, 8 };
            solution ob = new solution();
            int ans = ob.maxCoins(grid);
            op.println(ans);
        }
    }
}