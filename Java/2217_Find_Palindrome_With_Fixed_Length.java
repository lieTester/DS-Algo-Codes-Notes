package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    /*
     * logic is we can found range that how many palindrome num exist of intLength
     * if its querie is in range we find
     * we calculate range with simple math:
     * half = (intLength+1)/2; to handel odd length palindrome we use +1/2
     * L= (10^(half-1)); //same as we get range of integer like 2^(32-1)<->(2^32)-1
     * R= (10^half)-1;
     * 
     * secondHalfString=firstHalfString= to_string(L+(querie-1));
     * reverse(secondHalfString.begin(),secondHalfString.end());
     * ans.push_back(stoi(firstHalfString+secondHalfString.substr(intLength%2)));
     * 
     * why modulo because if intLength is odd
     * eg:- intLength=1, querie=3, firstHalf= 1+(3-1), secondHalf= firstHalf
     * now firstHalf == secondHalf if we add them ans become 33 but we want ans of
     * length 1 and that should be 3 only.
     * so before assign firstHalf to secondHalf we modulo 2: firstHalf(0,1/2) ==>
     * which is empty string so ans become 3
     * 
     * else querie out of range -1
     */
    public long[] kthPalindrome(int[] queries, int intLength) {
        long[] result = new long[queries.length];
        int i = 0;
        for (int num : queries) {
            long half = (intLength + 1) / 2;// half for 3 =2, half for 4 = 2
            long start = (long) Math.pow(10, half - 1);
            long end = (long) Math.pow(10, half) - 1;
            if (num <= (end - start + 1)) { // check if query is within range
                String firstHalfOfPalindrome = ((start) + (num - 1)) + "";
                String secondHalf = (new StringBuffer(firstHalfOfPalindrome)).reverse().toString();
                result[i++] = Long.parseLong(firstHalfOfPalindrome + secondHalf.substring(intLength % 2));
                // since half is calculated as 1 extra for odd numbers, remove the first char
                // for odd length in substring - 1001 vs 10+(0)1
            } else {
                result[i++] = -1;
            }
        }
        return result;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution
         obj = new solution
        ();
            int grid[] = { 1, 2, 3, 4, 5, 90 };

            op.println(obj.kthPalindrome(grid, 3));

        }
    }

}
