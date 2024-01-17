package Java;

import java.util.*;
import java.io.*;

public class solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        int l, r, mid, temp = 0;
        l = 0;
        r = arr.length - 1;
        if (k > r + 1)
            return new ArrayList<>();
        while (l <= r) {
            mid = (l + r) / 2;
            if (arr[mid] == x) {
                temp = mid;
                break;
            }
            if (x < arr[mid])
                r = mid - 1;
            else
                l = mid + 1;
            if (Math.abs(arr[temp] - x) > Math.abs(arr[mid] - x))
                temp = mid;
        }
        l = temp - 1;
        r = temp + 1;
        List<Integer> ans = new ArrayList<Integer>();

        ans.add(arr[temp]);
        while ((l >= 0 || r < arr.length) && ans.size() < k) {
            if (l >= 0 && r < arr.length && (x - arr[l]) <= (arr[r] - x))
                ans.add(arr[l--]);
            else if (l >= 0 && r < arr.length && (x - arr[l]) > (arr[r] - x))
                ans.add(arr[r++]);
            else if (l >= 0)
                ans.add(arr[l--]);
            else {
                ans.add(arr[r++]);
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
            int grid[] = { 1, 2, 3, 4, 5 };
            solution ob = new solution();
            List<Integer> ans = ob.findClosestElements(grid, 4, 3);
            op.println(ans);
        }
    }
}