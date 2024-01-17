package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    public List<Integer> pathInZigZagTree(int label) {
        int level, count;
        level = count = 0; // count is temprary just to get level
        while (count < label) {
            count += (1 << level);
            ++level;
        }
        List<Integer> ans = new ArrayList<Integer>();
        ans.add(label);
        int start, end, diff;
        /*
         * now solution is that we get the difrense bw the label and max value in that
         * level
         * after that we add with start value and divide by 2 why so
         * 
         * 
         * if we are given a normal tree like
         * 
         * 1 1
         * / \ / \
         * 2 3 3 2
         * / \ /\ / \ / \
         * 4 5 6 7 4 5 6 7
         * 
         * we get parent of every node just by in this tree we cannot do parent=n/w
         * parent=n/2 eg: 7/2=3,5/2=2 What we do?
         * 
         * we can find complement of node mean if we look carefully :
         * praent of node in right tree is parent of same distance node in left tree
         * 
         * right
         * parent child parent child
         * 7 3 7 2
         * 6 3 6 2
         * 5 2 5 3
         * 4 2 4 3
         * 
         * just at swap position so we find complement with
         * diffrence=(maxValueAtLevel-1)-label
         * ans= (SamllestValueAtLevel+diffrence)/2;
         * and change label=ans;
         */
        while (level > 1) {
            start = 1 << (level - 1);
            end = (1 << level) - 1;
            diff = end - label;
            ans.add((start + diff) / 2);
            label = ans.get(ans.size() - 1);
            --level;
        }
        Collections.sort(ans);
        return ans;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            // int nums[] = { 2, 4, 1, 3, 2 };
            op.println(obj.pathInZigZagTree(14));

        }
    }

}