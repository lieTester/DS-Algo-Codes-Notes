package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {

    /*
     * can be many valid ans easy but treaky
     * we start from last index and se if any max value present before that index.
     * if(yes)
     * - then add maxValueIndx+1 to ans and ithIndex aswell;
     * - then make 2 reverse operation first from 0-maxValueIndex and 2 0 to
     * -- ithIndex
     * else
     * - don't do any thing
     * 
     * 
     */
    public void reverse(int[] arr, int l, int r) {
        while (l < r) {
            arr[l] ^= arr[r];
            arr[r] ^= arr[l];
            arr[l] ^= arr[r];
            l++;
            r--;
        }
    }

    public List<Integer> pancakeSort(int[] arr) {
        List<Integer> ans = new ArrayList<Integer>();
        for (int i = arr.length - 1; i >= 0; --i) {
            int indx = i;
            for (int j = i - 1; j >= 0; --j) {
                indx = (arr[indx] < arr[j] ? j : indx);
            }
            if (indx != i) {
                ans.add(indx + 1);
                ans.add(i + 1);
                reverse(arr, 0, indx);
                reverse(arr, 0, i);
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
            int grid[] = { 3, 2, 4, 1 };
            // for above grid both are correct ans [4,2,4,3], [3, 4, 2, 3, 1, 2]
            op.println(obj.pancakeSort(grid));

        }
    }

}