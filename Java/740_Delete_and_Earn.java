package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

// import java.math.*;
public class solution {

    int memo(int[] nums, int n, int[] dp) {
        if (n <= 0)
            return 0;
        if (dp[n] != -1)
            return dp[n];

        int points = 0, indx = n, indx2;

        while (indx > 0 && nums[n - 1] == nums[indx - 1]) {
            indx--;
            points += nums[n - 1];
        }
        ;
        indx2 = indx;
        while (indx2 > 0 && nums[n - 1] == nums[indx2 - 1] + 1) {
            indx2--;
        }

        points += memo(nums, indx2, dp);
        points = Math.max(points, memo(nums, indx, dp));

        return dp[n] = points;
    }

    public int deleteAndEarn(int[] nums) {
        // int []dp=new int[nums.length+1];
        // Arrays.fill(dp, -1);
        // Arrays.sort(nums);
        // return memo(nums,nums.length,dp);

        /*
         * above code is for memoization
         * and below one is tabulation
         */

        HashMap<Integer, Integer> mp = new HashMap<>();
        List<Integer> t = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            // in java array list have function to check value exist or not
            if (!t.contains(nums[i])) {
                t.add(nums[i]);
            }
            mp.put(nums[i], mp.getOrDefault(nums[i], 0) + 1);
        }
        Collections.sort(t);
        int[] dp = new int[t.size()];
        int ans = 0;

        for (int i = 0; i < t.size(); i++) {
            dp[i] = t.get(i) * mp.get(t.get(i));

            if (i == 1)
                dp[i] += (t.get(1) == t.get(0) + 1) ? 0 : dp[0];
            else if (i != 0 && t.get(i) != t.get(i - 1) + 1)
                dp[i] += Math.max(dp[i - 2], dp[i - 1]);
            else if (i != 0)
                dp[i] += Math.max(dp[i - 2], i > 2 ? dp[i - 3] : 0); // why this i>2 condition here debug
                                                                     // [1,1,1,2,4,5,5,5,6] test case

            ans = Math.max(ans, dp[i]);
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
            int grid[] = { 2, 2, 3, 3, 3, 4 };
            solution ob = new solution();
            int ans = ob.deleteAndEarn(grid);
            op.println(ans);
        }
    }
}