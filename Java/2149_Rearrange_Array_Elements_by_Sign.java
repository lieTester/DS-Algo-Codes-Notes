package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {

    public int[] rearrangeArray(int[] nums) {
        int i = 0, j = 0, k = 0, n = nums.length;
        int[] ans = new int[n];
        while (i < n || j < n) {
            while (i < n && nums[i] < 0)
                i++;
            if (i < n)
                ans[k++] = nums[i];
            while (j < n && nums[j] > 0)
                j++;
            if (j < n)
                ans[k++] = nums[j];
            ++i;
            ++j;
        }

        return ans;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int grid[] = { 3, 1, -2, -5, 2, -4 };
            op.println(obj.rearrangeArray(grid));

        }
    }

}
