package Java;



// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

public class solution {

    public boolean help(int[][] graph, Integer[] colors, int node, int cl) {
        if (colors[node] != null) {
            if (colors[node] == cl)
                return true;
            return false;
        }
        colors[node] = cl;
        for (int i = 0; i < graph[node].length; i++) {
            if (!help(graph, colors, graph[node][i], cl ^ 1))
                return false;
        }
        return true;
    }

    public boolean isBipartite(int[][] graph) {
        int n = graph.length;
        Integer[] colors = new Integer[n];
        for (int i = 0; i < graph.length; i++) {
            if (colors[i] == null) {
                if (!help(graph, colors, i, 0))
                    return false;
            }
        }
        return true;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {

            // int x = ip.nextInt();
            // int y = ip.nextInt();
            // op.println(x + y);
            int grid[][] = { { 1, 2, 3 }, { 0, 2 }, { 0, 1, 3 }, { 0, 2 } };
            solution ob = new solution();
            boolean ans = ob.isBipartite(grid);
            op.println(ans);
        }
    }
}