package Java;

import java.util.*;
import java.io.*;

public class solution {
    public int minimumSize(int[] nums, int m) {
        int start = 1;
        int end = 0;
        for (int i = 0; i < nums.length; ++i)
            end = Math.max(end, nums[i]);

        int ans = Integer.MAX_VALUE;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            // why we do this becuse when we use binary search on value it might
            // over flow how? what if (start+end) become greater than in_max so
            // if we use start+(end-start) to avoid overflow
            int count = 0;
            for (int i = 0; i < nums.length; i++) {
                // to get ciel we have to convert piles[i] to float
                if (nums[i] > mid)
                    count += Math.ceil(nums[i] * 1.0 / mid) - 1;
                // why minus 1 eg if we operate on 9 2 times what result will be
                // 9=> [6,3] => [3,3,3] which mean total ceil number we get -1 is over total
                // count

                if (count > m)
                    break;
            }
            if (count > m)
                start = mid + 1;
            else {
                ans = Math.min(ans, mid);
                end = mid - 1;
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
            int nums[] = { 9 };
            // [2,4,8,2] ,4
            op.println(obj.minimumSize(nums, 2));

        }
    }
}
