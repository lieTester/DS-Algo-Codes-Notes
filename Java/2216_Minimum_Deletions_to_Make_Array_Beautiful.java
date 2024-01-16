package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {

    public int minDeletion(int[] nums) {
        int count = 0;
        for (int i = 0; i < nums.length - 1; ++i) {
            // why i-count to make the point after delete transfer all elements to left
            // i-count give us index point after deleting then next index become odd or even
            if (((i - count) & 1) == 0 && nums[i] == nums[i + 1])
                count++;
        }
        return ((nums.length - count) & 1) == 1 ? count + 1 : count; // its for if after removing or without remove
                                                                     // array size is odd remove last element
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int grid[] = { 1, 1, 2, 2, 3, 3 };
            op.println(obj.minDeletion(grid));

        }
    }

}
