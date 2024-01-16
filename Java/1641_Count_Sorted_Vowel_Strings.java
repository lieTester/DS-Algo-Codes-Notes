package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

// import java.math.*;
public class solution {

    // logic is we store sum of all vowels come after curr vowels
    // initital we have [1,1,1,1,1] n==1
    // n==2 ,both index including
    // dp[0 or a]= previous dp[0-4]
    // dp[1 or e]= previous dp[1-4]
    // dp[2 or i]= previous dp[2-4]
    // dp[3 or o]= previous dp[3-4]
    // dp[4 or u]= previous dp[4-4]

    public int countVowelStrings(int n) {
        int dp[] = { 1, 1, 1, 1, 1 };
        int temp[] = { 1, 1, 1, 1, 1 };
        int ans = 5;
        for (int i = 2; i <= n; i++) {
            temp = dp.clone();
            ans = 0;
            for (int j = 0; j < 5; j++) {
                dp[j] = 0;
                for (int k = j; k < 5; k++)
                    dp[j] += temp[k];
                ans += dp[j];
            }
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
            // int grid[][]= { { 0, 0, 0 }, { 0, 1, 0 }, { 0, 1, 0 }, { 1, 1, 1 }, { 1, 1, 0
            // } };
            solution ob = new solution();
            int ans = ob.countVowelStrings(7);
            op.println(ans);
        }
    }
}