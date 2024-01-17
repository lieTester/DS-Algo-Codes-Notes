package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    // kind of koko eat banana
    /*
     * 
     * we make binary search on max element in array till total sum of array
     * we take sum=0,
     * and keep increasing untill it < mid
     * (bcs after that we are going towards the maxsum among all subarrays although
     * we want minisum)
     * and every time we get sum>mid we ++count so weget understanding that we have
     * to dived array in m
     * if(count>m) means according to mid we cannot divide array in m parts so
     * start=mid+1
     * else (minimize the maximum sum subarray)
     * ans=min(ans,mid)
     * end=mid-1 (try to minimize sum subarray what we have now)
     * 
     */
    public int splitArray(int[] nums, int m) {

        int start = nums[0], end, ans, mid, count, sum = 0, i;
        for (i = 0; i < nums.length; ++i) {
            sum += nums[i];
            start = Math.max(start, nums[i]);
        }
        ans = end = sum;
        if (m == nums.length)
            return start;
        while (start <= end) {
            mid = start + (end - start) / 2;
            count = 1; // 1 <= m <= min(50, nums.length) base case
            sum = 0;
            for (i = 0; i < nums.length; ++i) {
                sum += nums[i];
                if (sum > mid) {
                    ++count;
                    sum = nums[i];
                }
                if (count > m)
                    break;
            }

            if (count > m) {
                start = mid + 1;
            } else {
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
            int nums[] = { 7, 2, 5, 10, 8 };

            op.println(obj.splitArray(nums, 2));

        }
    }

}