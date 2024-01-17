package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    public String minWindow(String s, String t) {
        HashMap<Character, Integer> mp = new HashMap<>();

        int i, j, count;
        String ans = "";
        for (i = 0; i < t.length(); i++) {
            mp.put(t.charAt(i), mp.getOrDefault(t.charAt(i), 0) + 1);
        }
        count = mp.size();
        for (i = 0, j = 0; i < s.length(); i++) {
            mp.put(s.charAt(i), mp.getOrDefault(s.charAt(i), 0) - 1);
            if (mp.get(s.charAt(i)) == 0)
                --count;

            if (count == 0) {
                while (count == 0) {
                    if (ans.length() > i - j + 1 || ans.isEmpty()) {
                        ans = s.substring(j, i + 1);
                    }
                    mp.put(s.charAt(j), mp.get(s.charAt(j)) + 1);
                    if (mp.get(s.charAt(j)) == 1)
                        ++count;
                    ++j;
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
            // int nums[] = { 1,2,3,4,7 };
            op.println(obj.minWindow("ADOBECODEBANC", "ABC"));

        }
    }

}