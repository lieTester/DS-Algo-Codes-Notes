package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;
// import java.math.*;

public class solution {
    /*
     * 
     * 
     * we are going to make pascal triangle
     * 1
     * 1 1
     * 1 2 1
     * 1 3 3 1
     * 1 4 6 4 1
     * 
     */
    public double champagneTower(int poured, int query_row, int query_glass) {
        if (poured == 0)
            return 0.00;
        Double nextpor;
        List<Double> dp = new ArrayList<>();
        // convert it to from int to double;
        dp.add(new Double(poured));
        while (query_row-- > 0) {
            nextpor = Math.max((dp.get(0) - 1) / 2, 0);
            List<Double> temp = new ArrayList<>();
            temp.add(nextpor);

            // work from when dp size = 2
            for (int i = 1; i < dp.size(); i++) {
                nextpor = Math.max((dp.get(i - 1) - 1) / 2, 0) + Math.max((dp.get(i) - 1) / 2, 0);
                temp.add(nextpor);
            }
            temp.add(temp.get(0));
            dp = new ArrayList<>(temp);
        }

        return Math.min(dp.get(query_glass), 1);
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt")); PrintWriter op = new PrintWriter(f);) {

            // int x = 10;
            // int y = 11;
            // op.println(x + y);
            solution ob = new solution();
            double x = ob.champagneTower(2, 1, 1);
            op.println(x);
        }
    }
}
