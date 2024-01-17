package Java;

import java.util.*;
import java.io.*;

// import static java.lang.Math.max;
// import static java.lang.Math.min;
// import static java.lang.Math.abs;
// import static java.lang.System.out;

public class solution {

    int []Bi_tree;
    public void update(int i){
        while(i<Bi_tree.length){
            Bi_tree[i]+=1;
            i+=(i&-i);
        }
    }
    public int getSmaller(int i){
        // we cannot count current i as smaller its equal 
        // in [-1,-1] this case on second call we get [1,0] we make call to i-1;
        // if we always intitalize the we did we get correct ans
        int s=0;
        i-=1;
        while(i>0){
            s+=Bi_tree[i];
            i-=(i&-i);
        }
        return s;
    }
    public List<Integer> countSmaller(int[] nums) {
        // why we are using 10000*2+1 size because we have range from -10^4 to 10^4
        // so to make index of negative number also we always send nums[i]+10^4
        // for eg if arr is [2,-3,4,3,-8]
        // in above array case we -3 store at index Bi_tree[(10000-3)==9997]
        // in above array case we 3 store at index Bi_tree[(10000+3)==10003]
        // so are maintaning sequence  -inf to +inf in range -10^4 to 10^4
        
        int maxNum = nums[0];
        int minNum = nums[0];
        List<Integer> ans = new ArrayList<>();
        for (int j : nums) {
            if (j > maxNum)
                maxNum = j;
            if (j < minNum)
                minNum = j;

        }
        int n=Math.max(maxNum,Math.abs(minNum));
        // cout<<n<<endl;
        
        // why size is 2*n+2 to get handel 0 [-1,-1], in this case n+1 become zero and fenwick tree work on 1 base indexing why so becuse (0+(0&-0))==0 will stuck in infinite loop
        Bi_tree= new int[(2*n)+2];
        for(int i=nums.length-1;i>=0;--i){
            ans.add(getSmaller(nums[i]+n+1));
            update(nums[i]+n+1);
        }
        Collections.reverse(ans);
        return ans;
    }


    public static void main(String[] args) throws FileNotFoundException {
        File f = new File("output.txt");

        // Scanner ip = new Scanner(System.in);
        try (Scanner ip = new Scanner(new File("input.txt"));
                PrintWriter op = new PrintWriter(f);) {
            solution obj = new solution();
            int grid[] = { 5,2,6,1};

            op.println(obj.countSmaller(grid));

        }
    }

}
