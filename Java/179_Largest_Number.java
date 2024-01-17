package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {

    public String largestNumber(int[] n) {
        String nums[] = new String[n.length];

        for (int i = 0; i < n.length; ++i) {
            nums[i] = n[i] + "";
        }
        Arrays.sort(nums, new Comparator<String>() {
            @Override
            public int compare(String i, String j) {
                String s1 = i + j;
                String s2 = j + i;
                return s2.compareTo(s1);
            }
        });

        if (nums[0].charAt(0) == '0')
            return "0";

        String ans = "";
        for (String i : nums)
            ans += i;
        return ans;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int grid[] = { 1, 8, 6, 2, 5, 4, 8, 3, 7 };
            op.println(obj.largestNumber(grid));

        }
    }

}
