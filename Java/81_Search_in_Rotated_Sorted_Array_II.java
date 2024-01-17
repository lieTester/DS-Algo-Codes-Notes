package Java;

import java.util.*;
import java.io.*;

public class solution {
    public boolean search(int[] nums, int target) {
        int l = 0;
        int r = nums.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target)
                return true;
            // this is kind of point we have to be carefull
            // either check with mid and r or mid and l if mix it up you don't get answere
            if (nums[mid] > nums[l]) {
                if (target < nums[l] || target > nums[mid])
                    l = mid + 1;
                else
                    r = mid - 1;
            } else if (nums[mid] < nums[l]) { // this is treaky
                if (target < nums[mid] || target > nums[r])
                    r = mid - 1;
                else
                    l = mid + 1;
            } else
                ++l;
        }
        return false;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {

            // int x = ip.nextInt();
            // int y = ip.nextInt();
            // op.println(x + y);
            // debug [1,1,1,1,1,1,1,1,1,13,1,1,1,1,1,1,1,1,1,1,1,1], 13
            int grid[] = { 2, 5, 6, 0, 0, 1, 2 };
            solution ob = new solution();
            boolean ans = ob.search(grid, 0);
            op.println(ans);
        }
    }
}