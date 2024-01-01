import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {

    private int K;
    private int[] preSum; // preSum[i] is sum of stones[0] to stones[i].
    private int[][][] memo;

    public int mergeStones(int[] stones, int K) {
        if (stones.length == 1) return 0;
        
        this.K = K;
        int stonesLen = stones.length;
        memo = new int[stonesLen + 1][stonesLen + 1][K + 1];
        preSum = new int[stonesLen + 1];
        
        buildPreSum(stones, K);
        
        int result = mergeStonesRecur(1, stones.length, 1, stones);
        
        return result == Integer.MAX_VALUE ? -1 : result;
    }

    private void buildPreSum(int[] stones, int K) {
        preSum[0] = 0;
        for (int i = 1; i < preSum.length; i++) {
            preSum[i] = preSum[i - 1] + stones[i - 1];
        }
    }

    // Minimum cost merging piles from i to j into targetPiles pile.
    public int mergeStonesRecur(int i, int j, int targetPiles, int[] stones) {
        if (memo[i][j][targetPiles] != 0) return memo[i][j][targetPiles];
        
        if (j - i + 1 < targetPiles) return Integer.MAX_VALUE;
        if (i == j) return (targetPiles == 1) ? 0 : Integer.MAX_VALUE;
        
        if (targetPiles == 1) {
            int subMinCost = mergeStonesRecur(i, j, K, stones);
            if (subMinCost != Integer.MAX_VALUE) memo[i][j][targetPiles] = preSum[j] - preSum[i - 1] + subMinCost;
            else memo[i][j][targetPiles] = subMinCost;
            return memo[i][j][targetPiles];
        }

        int minCost = Integer.MAX_VALUE;
        for (int k = i; k <= j - 1; k++) {
            int leftCost = mergeStonesRecur(i, k, targetPiles - 1, stones);
            if (leftCost == Integer.MAX_VALUE) continue;
            int rightCost = mergeStonesRecur(k + 1, j, 1, stones);
            if (rightCost == Integer.MAX_VALUE) continue;
            minCost = Math.min(leftCost + rightCost, minCost);
        }
        
        memo[i][j][targetPiles] = minCost;
        return minCost;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();

            int grid[] = { 3,5,1,2,6};
            
            op.println(obj.mergeStones(grid,3));

        }
    }

}
