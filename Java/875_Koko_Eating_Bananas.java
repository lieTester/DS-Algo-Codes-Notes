package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    public int minEatingSpeed(int[] piles, int h) {
        int start = 1;
        int end = 0;
        for (int i = 0; i < piles.length; ++i)
            end = Math.max(end, piles[i]);
        int ans = Integer.MAX_VALUE;
        while (start <= end) {
            int mid = start + (end - start) / 2;// why we do this becuse when we use binary search on value it might
                                                // over flow how? what if (start+end) become greater than in_max so
                                                // if we use start+(end-start) to avoid overflow
            int count = 0;
            for (int i = 0; i < piles.length; i++) {
                // to get ciel we have to convert piles[i] to float
                if (piles[i] > mid)
                    count += Math.ceil(piles[i] * 1.0 / mid);
                else
                    count += 1;
                if (count > h)
                    break;
            }
            if (count > h)
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
            int nums[] = { 3, 6, 7, 11 };

            op.println(obj.minEatingSpeed(nums, 8));

        }
    }

}