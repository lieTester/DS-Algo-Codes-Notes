package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {
    public List<Integer> findSubstring(String s, String[] words) {
        int k = words[0].length();
        int len = s.length() - (words.length * k);
        int strLen = words.length * k;
        if (s.length() < strLen)
            return new ArrayList<Integer>();
        ;

        HashMap<String, Integer> mp = new HashMap<>();
        HashMap<String, Integer> temp = new HashMap<>();
        List<Integer> ans = new ArrayList<Integer>();
        for (String word : words) {
            mp.put(word, mp.getOrDefault(word, 0) + 1);
        }
        temp.putAll(mp);
        String x;
        for (int i = 0, j = 0; i <= len; ++i) {

            if (mp.containsKey(s.substring(i, i + k))) {
                j = i;
                while (temp.size() > 0) {
                    x = s.substring(j, j + k);
                    if (temp.containsKey(x)) {
                        temp.put(x, temp.get(x) - 1);
                        if (temp.get(x) == 0)
                            temp.remove(x);
                    } else
                        break;
                    j += k;
                }
                if (temp.size() == 0)
                    ans.add(i);
                temp.putAll(mp);
            }
        }
        return ans;
    }

    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            String grid[] = { "foo", "bar" };
            op.println(obj.findSubstring("barfoothefoobarman", grid));

        }
    }

}