package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    public int minSpeedOnTime(int[] dist, double hour) {
        int start = 1;
        int end = (int) 1e+7;
        int mid;
        while (start <= end) {
            mid = start + (end - start) / 2;
            double count = 0;
            for (int i = 0; i < dist.length; ++i) {
                count = Math.ceil(count);
                // its a important point we cannot use ceil directly at dvd point beacuse it
                // give us the ceil for last point as well and at last we don't have to wait for
                // train (because of train arival time is always int) so we get correct ans
                count += (dist[i] * 1.0) / mid;
            }
            if (count > hour) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return start > 1e+7 ? -1 : start;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int grid[] = { 1, 3, 2 };
            op.println(obj.minSpeedOnTime(grid, 6));

        }
    }

}