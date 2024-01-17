package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    static int maxm;

    public int help(TreeNode root, int val) {
        if (root == null)
            return 0;
        int l = 0, r = 0;
        if (root.val != val) {

            l = help(root.left, root.val);
            r = help(root.right, root.val);
            maxm = Math.max(maxm, l + r);
            return 0;
        }

        l = help(root.left, val);
        r = help(root.right, val);
        // total duplicate values in l+r or l+1 or r+1
        // duplicate means total similar values in path -1
        maxm = Math.max(maxm, Math.max(l + r, Math.max(l + 1, r + 1)));

        return Math.max(r, l) + 1;
    }

    public int longestUnivaluePath(TreeNode root) {
        maxm = 0;
        help(root, -1001);
        return maxm;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            // int nums[] = { 2, 4, 1, 3, 2 };
            TreeNode node5 = new TreeNode(5);
            TreeNode node4 = new TreeNode(1);
            TreeNode node3 = new TreeNode(1);
            TreeNode node2 = new TreeNode(5, null, node5);
            TreeNode node1 = new TreeNode(4, node3, node4);
            TreeNode node0 = new TreeNode(5, node1, node2);

            op.println(obj.longestUnivaluePath(node0));

        }
    }

}