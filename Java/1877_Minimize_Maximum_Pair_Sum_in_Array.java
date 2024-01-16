package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

// import java.math.*;
public class solution {

    public int minPairSum(int[] nums) {
        Arrays.sort(nums);
        int ans = Integer.MIN_VALUE;
        for (int i = 0, j = nums.length - 1; i < j; i++, j--) {
            ans = Math.max(ans, nums[i] + nums[j]);
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
            int grid[] = { 3, 5, 4, 2, 4, 6 };
            solution ob = new solution();
            int ans = ob.minPairSum(grid);
            op.println(ans);
        }
    }
}