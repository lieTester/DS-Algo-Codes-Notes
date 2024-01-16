package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    /*
     * same as Split array Largest sum
     */
    public int maxDistance(int[] position, int m) {
        Arrays.sort(position); // sort is important
        int start = 1;
        int end = position[position.length - 1];
        int mid, count, prev;
        while (start <= end) {
            mid = start + (end - start) / 2;
            count = 1;
            prev = position[0];
            for (int i = 1; i < position.length; ++i) {
                if (position[i] - prev >= mid) {
                    count++;
                    prev = position[i];
                }
                if (count >= m)
                    break;
            }
            if (count >= m) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return end;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int nums[] = { 1, 2, 3, 4, 7 };
            // Input: position = [5,4,3,2,1,1000000000], m = 2 another one
            op.println(obj.maxDistance(nums, 3));

        }
    }

}