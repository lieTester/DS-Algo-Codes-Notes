package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {

    public int maxArea(int[] nums) {
        int i, j, l, r, ans;
        i = l = ans = 0;
        j = r = nums.length - 1;
        while (i < j) {
            ans = Math.max(ans, Math.min(nums[i], nums[j]) * (j - i));
            if (nums[i] < nums[j])
                ++i;
            else if (nums[i] > nums[j])
                --j;
            else {
                l = i;
                r = j;
                while (l < r) {
                    if (l - r != 0)
                        break;
                    ++l;
                    --r;
                }
                if (nums[l] > nums[r])
                    --j;
                else
                    ++i;
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
            int grid[] = { 1, 8, 6, 2, 5, 4, 8, 3, 7 };
            op.println(obj.maxArea(grid));

        }
    }

}
