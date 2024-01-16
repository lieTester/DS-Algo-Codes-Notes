package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    // same as koko eating banana same code
    public int minimizedMaximum(int n, int[] quantities) {
        int start = 1;
        int end = 0;
        for (int i : quantities)
            end = Math.max(end, i);
        int ans = end;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            int count = 0;
            for (int product : quantities) {
                if (product > mid)
                    count += (int) Math.ceil(product * 1.0 / mid);
                else
                    count += 1;
                if (count > n)
                    break;
            }
            if (count > n) {
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
            int nums[] = { 11, 6 };

            op.println(obj.minimizedMaximum(6, nums));

        }
    }

}