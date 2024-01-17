package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    // this is treaky becuase only one duplicated but the duplicate can be repeated
    // more than ones in arr
    // we use fast and slow pointer
    public int findDuplicate(int[] nums) {
        int fast = 0, slow = 0;
        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow == fast)
                break;
            // it a part where we get the intersection point bcs after this and before this
            // we get the dup
        }
        slow = 0;
        while (true) {
            slow = nums[slow];
            fast = nums[fast];
            if (slow == fast)
                return slow;
        }
        // although this want work because thier is definately a duplicate
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int nums[] = { 2, 4, 1, 3, 2 };
            op.println(obj.findDuplicate(nums));

        }
    }

}