package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {

    public boolean checkValidString(String s) {
        /*
         * we have to use stack for inex to balence parantheses with start, how?
         * we push each index of '(' and '*' in 2 diffrent stack
         * if ')' comes:
         * if '(' stack is not empty pop from it;
         * else:
         * if '*' stack is not empty pop;
         * else don't have any '*' or '(' to balance current ')' bracket so return
         * false;
         * 
         * if '(' stack is not empty mean to bancle these empty openings we use star as
         * closing:
         * but if a '*'.top() > '('.top() means situatuion is like "*(" so it cannot be
         * balance so return false;
         * 
         * if after above condition size of '(' stack > 0 return false:
         * means we have opening brackets without closing ones so return false;
         * 
         * finally if we come this far mean string is balansed return true;
         * 
         * 
         */
        int count = 0;
        Stack<Integer> op = new Stack<>();
        Stack<Integer> st = new Stack<>();

        for (char i = 0; i < s.length(); ++i) {
            if (s.charAt(i) == '(')
                op.push(count);
            else if (s.charAt(i) == ')') {
                if (op.size() > 0)
                    op.pop();
                else {
                    if (st.size() > 0)
                        st.pop();
                    else
                        return false;
                }
            } else {
                st.push(count);
            }
            ++count;
        }
        while (op.size() > 0 && st.size() > 0) {
            if (op.peek() > st.peek())
                return false;
            op.pop();
            st.pop();
        }
        if (op.size() > 0)
            return false;
        return true;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            // int grid[] = { 1, 8, 6, 2, 5, 4, 8, 3, 7 };
            op.println(obj.checkValidString("(*))"));

        }
    }

}
