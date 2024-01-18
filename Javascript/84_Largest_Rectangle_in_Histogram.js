/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (A) {
   var n = A.length,
      l_st = [],
      r_st = [];
   var l_dp = Array(n).fill(-1);
   var r_dp = Array(n).fill(n);

   // Calculate the nearest smaller element to the left and right of each element
   for (let i = 0; i < n; ++i) {
      // Finding the nearest smaller element to the left
      while (l_st.length && A[l_st[l_st.length - 1]] >= A[i]) l_st.pop();
      if (l_st.length) l_dp[i] = l_st[l_st.length - 1];

      // Finding the nearest smaller element to the right
      while (r_st.length && A[r_st[r_st.length - 1]] >= A[n - i - 1])
         r_st.pop();
      if (r_st.length) r_dp[n - i - 1] = r_st[r_st.length - 1];

      l_st.push(i);
      r_st.push(n - i - 1);
   }

   // Calculate the maximum area of the rectangle
   var ans = 0;
   for (let i = 0; i < n; ++i) {
      ans = Math.max(ans, (r_dp[i] - l_dp[i] - 1) * A[i]);
   }
   return ans;
};
