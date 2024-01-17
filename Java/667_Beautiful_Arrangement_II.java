package Java;

import java.util.*;
import java.io.*;

public class solution {
    /*
     * the question is that we have to make an aray which makes only k distinct
     * values by taking abs diff of 2 adjacent elements
     * for eg:
     * n=9,k=4 now we hav to make an array which has 9 element and the array form k
     * distint integer by performing abs diff task bw 2 every 2adjacent elements
     * 
     * [1,5,2,4,3,6,7,8,9] ==>>[(5-1),(5-2),(4-2),(4-3),(6-3),(7-6),(8-7),(9-8)]
     * [4,3,2,1,3,1,1,1] exactly k distinc elements
     * 
     */
    public int[] constructArray(int n, int k) {
        int ans[] = new int[n];
        int l = 1;
        int r = 1 + k;
        int i = 0;
        while (k-- != 0) {
            if ((i & 1) == 1)
                ans[i] = r--;
            else
                ans[i] = l++;
            ++i;
        }

        while (i < n) {
            if (l <= r)
                ans[i] = l++;
            else
                ans[i] = i + 1;
            ++i;
        }
        return ans;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            // int nums[] = { 2, 4, 1, 3, 2 };
            op.println(obj.constructArray(9, 5));

        }
    }
}
