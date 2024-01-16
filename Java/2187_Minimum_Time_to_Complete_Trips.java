package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    /*
     * 
     * (mid /time[i]) mean total trip can be completed in mid time by ith bus
     * if total count<totalTrips then mid(time we are using to make trips is samller
     * than we need)
     * start=mid+1; this will give ans
     * else
     * try to complete atleast ttlTrips in minimum time
     * end=mid-1;
     * 
     */
    public long minimumTime(int[] time, int totalTrips) {
        long start, end = 0, mid, count;
        start = 1;
        for (int i : time) {
            end = Math.max(end, i);
        }
        end *= totalTrips;
        while (start <= end) {
            mid = start + (end - start) / 2;
            count = 0;
            for (int i = 0; i < time.length; ++i) {
                count += (mid / time[i]);
            }
            if (count < totalTrips) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return start;// this much time to make the totalTrip
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int grid[] = { 1, 2, 3 };
            op.println(obj.minimumTime(grid, 5));

        }
    }

}