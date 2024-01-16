package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    /*
     * Its just straight forward just add rung where its need and take max of rung
     * you just added and ith rung
     * 
     */
    public int addRungs(int[] rungs, int dist) {
        int ans = 0;
        int count = 0;
        for (int i = 0; i < rungs.length; ++i) {
            if (rungs[i] - count > dist) {
                // ceil is important
                ans += Math.ceil((rungs[i] - count - dist) * 1.0 / dist); // total rung we have to add to reach to next
                                                                          // rung
                count += (rungs[i] - count - dist);
            }
            // we become greedy and take max because it creates a high chance to reach the
            // next rug with optimal dist
            count = Math.max(count, rungs[i]);
        }
        return ans;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int nums[] = { 1, 3, 5, 10 };

            op.println(obj.addRungs(nums, 2));

        }
    }

}