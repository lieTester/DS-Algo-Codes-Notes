package Java;

import java.util.*;
import java.io.*;

public class solution {
    /*
     * from end we look for sudden break in incresing oreder from (left <<==to==
     * right)
     * if there is:
     * 1 then we took the break index and look the greater elements from
     * nums[breakindex]<nums[(left <<==to== right)].
     * 2 after we get first we swap both of then, sort all elem after breakindex.
     * else:
     * sort the array in ascending
     * 
     */
    public void nextPermutation(int[] nums) {
        int n = nums.length - 1, i;
        for (i = n - 1; i >= 0; --i) {
            if (nums[i] < nums[i + 1])
                break;
        }
        if (i != -1) {
            int j;
            for (j = n; j > i; --j) {
                if (nums[i] < nums[j])
                    break;
            }
            nums[i] ^= nums[j];
            nums[j] ^= nums[i];
            nums[i] ^= nums[j];
            Arrays.sort(nums, i + 1, n + 1);
        } else {
            Arrays.sort(nums, 0, n + 1);
        }
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {

            // int x = ip.nextInt();
            // int y = ip.nextInt();
            // op.println(x + y);

            int grid[] = { 1, 1, 5 };
            solution ob = new solution();
            ob.nextPermutation(grid);
            for (int i : grid) {
                op.print(i);
                op.print("\t");
            }
        }
    }
}