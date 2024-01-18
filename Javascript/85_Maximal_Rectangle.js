/**
 * @param {character[][]} matrix - Input matrix of characters
 * @return {number} - Returns the area of the largest rectangle
 */

var largestRectangleArea = function (A) {
   var n = A.length,
      l_st = [],
      r_st = [];
   var l_dp = Array(n).fill(-1);
   var r_dp = Array(n).fill(n);

   // Finding the left and right boundaries of the bars
   for (let i = 0; i < n; ++i) {
      // Finding the left boundaries
      while (l_st.length && A[l_st[l_st.length - 1]] >= A[i]) l_st.pop();
      if (l_st.length) l_dp[i] = l_st[l_st.length - 1];

      // Finding the right boundaries
      while (r_st.length && A[r_st[r_st.length - 1]] >= A[n - i - 1])
         r_st.pop();
      if (r_st.length) r_dp[n - i - 1] = r_st[r_st.length - 1];

      l_st.push(i);
      r_st.push(n - i - 1);
   }

   var ans = 0;

   // Calculating the area of the largest rectangle
   for (let i = 0; i < n; ++i) {
      ans = Math.max(ans, (r_dp[i] - l_dp[i] - 1) * A[i]);
   }

   return ans;
};

var maximalRectangle = function (matrix) {
   var ans = 0;
   var arr = Array(matrix[0].length).fill(0);

   // Processing each row of the matrix
   for (let i = 0; i < matrix.length; ++i) {
      for (let j = 0; j < matrix[i].length; ++j) {
         if (i !== 0 && matrix[i][j] === "1") {
            // Adding the heights of bars if '1' is found in a subsequent row
            arr[j] = parseInt(matrix[i][j]) + arr[j];
         } else {
            // Setting the height of bars initially or resetting when '0' is found
            arr[j] = parseInt(matrix[i][j]);
         }
      }

      // Calculating the largest rectangle area in the current row
      ans = Math.max(ans, largestRectangleArea(arr));
   }

   return ans;
};
