package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

public class solution {
    /*
     * what question if any path from node lead to cylce than it is not safe?
     * so we check that any node following path connected to neighbour
     * node none of them lead to cycle and all reach to leafnode then we add it to
     * ans
     * else we don't add it.
     * 
     * we use dfs and map:-
     * map is for, suppose we leed to a alredy visited node than we should return
     * false, but what if the currnode we are on visit is already a safe node.
     * Because of above point we make the selected map which store all safe node
     * those are visited.
     * so,every time we get a visited node we check that if it is in selected map
     * then return true means this path is safe else false.
     * 
     */
    List<Integer> ans = new ArrayList<>();
    HashMap<Integer, Boolean> selected = new HashMap<>();

    public boolean help(int[][] graph, Boolean vis[], int node) {
        if (vis[node] != null) {
            if (selected.containsKey(node) == true)
                return true;
            return false;
        }
        vis[node] = true;
        for (int i : graph[node]) {

            if (help(graph, vis, i) == false)
                return false;
        }
        selected.put(node, true);
        ans.add(node);
        return true;
    }

    public List<Integer> eventualSafeNodes(int[][] graph) {
        Boolean vis[] = new Boolean[graph.length];
        for (int i = 0; i < graph.length; ++i) {
            if (vis[i] == null) {
                help(graph, vis, i);
            }
        }
        Collections.sort(ans);
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
            int grid[][] = { { 1, 2 }, { 2, 3 }, { 5 }, { 0 }, { 5 }, {}, {} };
            solution ob = new solution();
            List<Integer> ans = ob.eventualSafeNodes(grid);
            op.println(ans);
        }
    }
}