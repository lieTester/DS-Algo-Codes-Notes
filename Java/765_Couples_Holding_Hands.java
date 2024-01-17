package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    private HashMap<Integer, Integer> mp = new HashMap<>();

    public int minSwapsCouples(int[] row) {
        for (int i = 0; i < row.length; ++i) {
            mp.put(row[i], i);
        }
        int first, second, ans = 0;
        for (int i = 0; i < row.length; i += 2) {
            first = row[i];
            if ((first & 1) == 1) {
                if (first - 1 != row[i + 1]) {
                    ++ans;
                    second = row[i + 1];
                    // swap
                    row[i + 1] ^= row[mp.get(first - 1)];
                    row[mp.get(first - 1)] ^= row[i + 1];
                    row[i + 1] ^= row[mp.get(first - 1)];

                    mp.put(second, mp.get(first - 1));
                    mp.put(first - 1, i + 1);
                }
            } else {
                if (first + 1 != row[i + 1]) {
                    ++ans;
                    second = row[i + 1];
                    // swap
                    row[i + 1] ^= row[mp.get(first + 1)];
                    row[mp.get(first + 1)] ^= row[i + 1];
                    row[i + 1] ^= row[mp.get(first + 1)];

                    mp.put(second, mp.get(first + 1));
                    mp.put(first + 1, i + 1);
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
            solution obj = new solution();
            int grid[] = { 0, 2, 1, 3 };
            op.println(obj.minSwapsCouples(grid));

        }
    }

}
