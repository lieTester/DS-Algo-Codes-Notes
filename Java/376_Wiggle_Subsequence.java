package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {

    public int wiggleMaxLength(int[] nums) {
        // its LIS but just a turner if nums[i] grater look te min dp ,if smaller look
        // max dp

        int n = nums.length;
        int ans = 0;
        int[] maxDp = new int[n];
        int[] minDp = new int[n];
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (nums[i] < nums[j]) {
                    maxDp[i] = Math.max(maxDp[i], minDp[j] + 1);
                } else if (nums[i] > nums[j]) {
                    minDp[i] = Math.max(minDp[i], maxDp[j] + 1);
                }

                ans = Math.max(ans, Math.max(maxDp[i], minDp[i]));
            }
        }
        return ans + 1;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int grid[] = { 1, 17, 5, 10, 13, 15, 10, 5, 16, 8 };
            op.println(obj.wiggleMaxLength(grid));

        }
    }

}
