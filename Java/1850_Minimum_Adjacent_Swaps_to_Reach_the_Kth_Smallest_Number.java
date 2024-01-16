package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

public class solution {
    /*
     * void next permutation
     * from end we look for sudden break in incresing oreder from (left <<==to==
     * right)
     * if there is:
     * 1 then we took the break index and look the greater elements from
     * nums[breakindex]<nums[(left <<==to== right)].
     * 2 after we get first we swap both of then, sort all elem after breakindex.
     * else:
     * sort the array in ascending
     * 
     * after k permutation we are going to use bubble short which help us to come
     * back to the number before k permutation, how?
     * first we look on which index both the number are not matching in
     * temp[i]!=nums[i]:
     * 1 now we look in temp where is that number is present in
     * temp,while(temp[j]!=nums[i])j++;
     * 2 after this we add ans+=j-i; <<these many swap for ith nuber in nums.
     * 3 use bubble sort to reverse nextPremutaion effect by 1, from(temp[i] to
     * temp[j])
     * 
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
        }
    }

    public int getMinSwaps(String num, int k) {
        int n = num.length();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = num.charAt(i) - '0';
        }
        int[] temp = nums.clone();
        while (k != 0) {
            nextPermutation(temp);
            k--;
        }
        int ans = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] != temp[i]) {
                int j = i + 1;
                while (nums[i] != temp[j])
                    j++; // this is to create bubble sort area from i to j
                ans += j - i;
                while (j != i) {// 1 bubble sort == nextPremutation--, and we get total swaps
                    temp[j] ^= temp[j - 1];
                    temp[j - 1] ^= temp[j];
                    temp[j] ^= temp[j - 1];
                    --j;
                }
            }
        }

        return ans;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {

            // int x = ip.nextInt();
            // int y = ip.nextInt();
            // op.println(x + y);

            // int grid[] = { 9, 8, 7, 6, 5, 1, 2, 3, 4 };
            String s = "5489355142";
            solution ob = new solution();
            int ans = ob.getMinSwaps(s, 4);
            op.println(ans);
        }
    }
}
