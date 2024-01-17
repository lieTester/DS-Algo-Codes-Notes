package Java;

import java.util.*;
import java.io.*;

// import java.math.*;
public class solution {

    public int dfs(int[][] grid, int r, int c) {
        if (r >= grid.length || c >= grid[0].length || r < 0 || c < 0 || grid[r][c] == 0 || grid[r][c] == -1) {
            return 0;
        }
        int t = grid[r][c];
        grid[r][c] = -1;
        int temp = dfs(grid, r + 1, c);
        temp = Math.max(temp, dfs(grid, r - 1, c));
        temp = Math.max(temp, dfs(grid, r, c + 1));
        temp = Math.max(temp, dfs(grid, r, c - 1));
        grid[r][c] = t;
        return temp + t;
    }

    public int getMaximumGold(int[][] grid) {
        int ans = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] != 0) {
                    ans = Math.max(ans, dfs(grid, i, j));
                }
            }
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
            int grid[][] = { { 0, 6, 0 }, { 5, 8, 7 }, { 0, 9, 0 } };
            solution ob = new solution();
            int ans = ob.getMaximumGold(grid);
            op.println(ans);
        }
    }
}