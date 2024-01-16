package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

public class solution {
    /*
     * the point according to question we want all ones together right,
     * so first we calculate total ones, with this totalones window we calculte max
     * one present in windowOfOnes.size() .
     * Because the end have one count to be in same group we make array
     * circular,how?
     * sizeofArray*2 and access element in i%sizeofArray
     * and finally minus all the maxOnes in windowOfOnes.size() from totalOnes
     * 
     */
    public int minSwaps(int[] nums) {
        int ttlOnes = Arrays.stream(nums).sum();
        int n = nums.length;
        int groupOfOnes = 0, maxGroupOfOnes = 0;
        for (int i = 0, j = 0; i < n * 2; i++) {
            if (nums[i % n] == 1)
                ++groupOfOnes;

            if (i >= ttlOnes) {
                if (nums[j % n] == 1)
                    --groupOfOnes;
                maxGroupOfOnes = Math.max(maxGroupOfOnes, groupOfOnes);
                ++j;
            }
        }

        return ttlOnes - maxGroupOfOnes;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {

            // int x = ip.nextInt();
            // int y = ip.nextInt();
            // op.println(x + y);

            int grid[] = { 1, 1, 1, 0, 0, 1, 0, 1, 1, 0 };
            solution ob = new solution();
            int ans = ob.minSwaps(grid);
            op.println(ans);
        }
    }
}