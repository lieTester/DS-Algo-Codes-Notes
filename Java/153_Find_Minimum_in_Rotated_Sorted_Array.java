package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    public int findMin(int[] nums) {
        int l = 0;
        int r = nums.length - 1;
        int ans = nums[0];
        while (l <= r) {
            int mid = (r + l) / 2;

            if (nums[mid] < nums[r])
                r = mid - 1;
            else
                l = mid + 1;
            ans = Math.min(ans, nums[mid]);
        }
        return ans;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int nums[] = { 2, 4, 1, 3, 5 };
            op.println(obj.findMin(nums));

        }
    }

}