package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

public class solution {
    /*
     * basically what we do is first we make union of all == equations then,
     * now we look if eq has x!=y and if x and y has same parent than it is not
     * possible
     * that the x==y and x!=y
     * if x and y both have diffrent parents than only x!=y staisfy
     */
    int parent[] = new int[26];
    int rank[] = new int[26];

    int find(int x) {
        if (parent[x] == x)
            return x;
        return parent[x] = find(parent[x]);
    }

    void _union(int u, int v) {
        u = find(u);
        v = find(v);
        if (rank[v] > rank[u]) {
            parent[u] = v;
            ++rank[v];
        } else {
            parent[v] = u;
            ++rank[u];
        }
    }

    public boolean equationsPossible(String[] equations) {
        for (int i = 0; i < 26; ++i) {
            parent[i] = i;
            rank[i] = 0;
        }
        for (String s : equations) {
            if (s.charAt(1) == '=' && s.charAt(2) == '=') {
                _union(s.charAt(0) - 'a', s.charAt(3) - 'a');
            }
        }

        for (String s : equations) {
            if (s.charAt(1) == '!' && s.charAt(2) == '=') {
                if (find(s.charAt(0) - 'a') == find(s.charAt(3) - 'a'))
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
            String grid[] = { "a==b", "b==a" };
            // String grid[] = { "a==b", "b!=a" };
            solution ob = new solution();
            boolean ans = ob.equationsPossible(grid);
            op.println(ans);
        }
    }
}
