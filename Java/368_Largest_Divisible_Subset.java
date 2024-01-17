package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {

    public List<Integer> largestDivisibleSubset(int[] nums) {
        // longest incresing subsequence
        Arrays.sort(nums);
        int dp[] = new int[nums.length];
        int idx = 0;
        for (int i = nums.length - 1; i >= 0; --i) {
            for (int j = nums.length - 1; j > i; --j) {
                if (nums[j] % nums[i] == 0) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            if (dp[i] >= dp[idx])
                idx = i;
        }

        List<Integer> ans = new ArrayList<>();
        int prev = -1, maxInTotal = dp[idx];
        for (int i = idx; i < nums.length; i++) {
            if (dp[i] == maxInTotal && (nums[i] % prev == 0 || prev == -1)) {
                ans.add(nums[i]);
                prev = nums[i];
                maxInTotal--;
            }
        }

        return ans;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int grid[] = { 1, 2, 4, 8 };
            op.println(obj.largestDivisibleSubset(grid));

        }
    }

}
