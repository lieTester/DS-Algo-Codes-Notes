package Java;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;
import java.util.*;
import java.io.*;

// import java.math.*;
public class solution {
    // easy peasy just take the last index of char in mp and
    // in next loop every time lastCharacterPresentAtIndex==i increase count if the
    // charcter present in size(temp)==count mean its a break point store length in
    // ans

    public List<Integer> partitionLabels(String s) {
        Map<Character, Integer> mp = new HashMap<>();
        Map<Character, Integer> temp = new HashMap<>();
        List<Integer> ans = new ArrayList<>();
        for (int i = 0; i < s.length(); i++) {
            mp.put(s.charAt(i), i);
        }
        int count = 0, i, j;
        for (i = 0, j = 0; i < s.length(); i++) {
            temp.put(s.charAt(i), i);
            if (mp.get(s.charAt(i)) == i)
                count++;

            if (temp.size() == count) {
                ans.add(i - j + 1);
                j = i + 1;
                count = 0;
                temp.clear();
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
            // int grid[]= { 3, 5, 4, 2, 4, 6 };
            String s = "ababcbacadefegdehijhklij";
            solution ob = new solution();
            List<Integer> ans = ob.partitionLabels(s);
            op.println(ans);
        }
    }
}