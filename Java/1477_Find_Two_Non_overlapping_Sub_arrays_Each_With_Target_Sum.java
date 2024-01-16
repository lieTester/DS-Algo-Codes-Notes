package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

public class solution {

    public int minSumOfLengths(int[] arr, int target) {
        int n = arr.length;
        int[] pre = new int[n];
        int sum = 0;
        int ans = Integer.MAX_VALUE, preMin = Integer.MAX_VALUE;
        for (int i = 0, j = 0; i < n; i++) {
            sum += arr[i];
            while (sum > target)
                sum -= arr[j++];
            if (sum == target) { // this part is to store the target sum length as well prevent collision of 2
                                 // sub-array
                if (j > 0 && pre[j - 1] != Integer.MAX_VALUE) {
                    // we are looking for if pre[j-1] for prevent overlapping because [2,1,3,3,2,1]
                    // in this 3,3 and 3,2,1 make 5
                    // but they are overlapped so we dont want overlapp similarly [2,1,3,3,2,1,3]
                    // int 3,3 and 2,1,3 make 5 and its
                    // not overlapping as well so the preMin help us to always get minm at pre[j-1]
                    ans = Math.min(ans, pre[j - 1] + i - j + 1);
                }
                preMin = Math.min(preMin, i - j + 1);
                // this is important becuse we want length of target subarrays small as possible
            }
            pre[i] = preMin;
        }

        if (ans == Integer.MAX_VALUE)
            return -1;
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

            int grid[] = { 4, 3, 2, 6, 2, 3, 4 };
            solution ob = new solution();
            int ans = ob.minSumOfLengths(grid, 5);
            op.println(ans);
        }
    }
}