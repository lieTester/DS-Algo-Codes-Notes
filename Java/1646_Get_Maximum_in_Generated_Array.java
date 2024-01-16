package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

// import java.math.*;
public class solution {

    public int getMaximumGenerated(int n) {
        if (n < 2)
            return n;
        ArrayList<Integer> temp = new ArrayList<>();
        temp.add(0);
        temp.add(1);
        int ans = 1;
        for (int i = 1; 2 * i < n; i++) {

            temp.add(temp.get(i));
            temp.add(temp.get(i) + temp.get(i + 1));

            ans = Math.max(ans, Math.max(temp.get(2 * i), temp.get(2 * i + 1)));
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
            // int grid[]={ 2, 2, 3, 3, 3, 4};
            solution ob = new solution();
            int ans = ob.getMaximumGenerated(7);
            op.println(ans);
        }
    }
}