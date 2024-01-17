package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    public int findMin(int[] nums) {
        int l = 0, mid;
        int r = nums.length - 1;
        int ans = nums[0];
        while (l <= r) {
            mid = (l + r) / 2;
            if (nums[mid] < nums[r]) { // it means mid to r array is sorted
                r = mid - 1;
            } else if (nums[mid] > nums[r]) { // it means left part is sorted and bcs of r is smaller minm is on right
                l = mid + 1;
            } else {
                --r;
            }
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