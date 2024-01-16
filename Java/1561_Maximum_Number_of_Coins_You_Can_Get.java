package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

public class solution {
    /*
     * easy sort first
     * // then pick 2 (from end) and 1 from (start), becuse every one want max and
     * my turrn is always 2 then ill pick second largest in pill of three for eg:
     * [9,8,7,6,5,1,2,3,4] ==>>[1,2,3,4,5,6,7,8,9]
     * 
     * 9,8,1 => 8 is mine
     * 7,6,2 => 6 is mine
     * 5,4,3 => 4 is mine
     * -----
     * 18
     * 
     * [2,4,1,2,7,8] ==>> [1,2,2,4,7,8]
     * 8,7,1 => 7 is mine
     * 4,2,2 => 2 is mine
     * -----
     * 9
     * 
     */
    public int maxCoins(int[] piles) {
        Arrays.sort(piles);
        int i = 0, ans = 0;
        int j = piles.length - 1;
        while (i < j) {
            ans += piles[j - 1];
            ++i;
            j -= 2;
        }
        return ans;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {

            // int x = ip.nextInt();
            // int y = ip.nextInt();
            // op.println(x + y);

            int grid[] = { 9, 8, 7, 6, 5, 1, 2, 3, 4 };
            solution ob = new solution();
            int ans = ob.maxCoins(grid);
            op.println(ans);
        }
    }
}