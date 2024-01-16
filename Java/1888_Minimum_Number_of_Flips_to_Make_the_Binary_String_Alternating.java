package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {

    public int minFlips(String s) {
        int count1, count2;
        count1 = count2 = 0;
        int n = s.length();
        s = (s + s);
        // concatination take time in java so make character array;
        char[] alt1 = new char[2 * n];
        char[] alt2 = new char[2 * n];

        for (int i = 0; i < 2 * n; ++i) {
            if ((i & 1) == 1)
                alt1[i] = '1';
            else
                alt1[i] = '0';

            if ((i & 1) == 1)
                alt2[i] = '0';
            else
                alt2[i] = '1';
        }

        int ans = n;
        for (int i = 0, j = 0; i < 2 * n; ++i) {
            if (i < n) {
                if (alt1[i] != s.charAt(i))
                    ++count1;
                if (alt2[i] != s.charAt(i))
                    ++count2;
            } else {
                if (alt1[j] != s.charAt(j))
                    --count1;
                if (alt2[j] != s.charAt(j))
                    --count2;

                if (alt1[i] != s.charAt(i))
                    ++count1;
                if (alt2[i] != s.charAt(i))
                    ++count2;
                ++j;
                ans = Math.min(ans, Math.min(count1, count2));
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
            // int grid[] = { 1, 3, 2 };
            op.println(obj.minFlips("111000"));

        }
    }

}