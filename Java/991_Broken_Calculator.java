package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

public class solution {
    /*
     * for X < Y, if we start from x, then we don't have a clue how should we pick
     * -1 or *2
     * but if we start from y, and look at it odd-eveness, then we would have a clue
     * if y is odd, then the last operation must be -1, no other approaches
     * if y is even, then we have two choices: -1 or * 2.
     * To get last y from last second y2, we have two ways: y2 * 2 or y2 * 2 - 1 - 1
     * y2 * 2 -1 - 1 = (y2-1) * 2, and (y2-1) * 2 can save us one operation.
     * Hence for the last y, we will always pick /2 when it is even
     */
    public int brokenCalc(int start, int target) {
        if (start == target)
            return 0;
        if (start > target)
            return start - target;
        if (target % 2 != 0)
            return brokenCalc(start, (target + 1) / 2) + 2;
        return brokenCalc(start, target / 2) + 1;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {

            // int x = ip.nextInt();
            // int y = ip.nextInt();
            // op.println(x + y);
            // int grid[]= {3,1,5,8};
            solution ob = new solution();
            int ans = ob.brokenCalc(5, 8);
            op.println(ans);
        }
    }
}