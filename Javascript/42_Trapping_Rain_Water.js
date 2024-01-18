/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
   var n = height.length,
      ans = 0;
   var l_dp = Array(n).fill(0);
   var r_dp = Array(n).fill(0);
   for (let i = 0; i < n; ++i) {
      if (i === 0) {
         l_dp[i] = height[i];
         r_dp[n - i - 1] = height[n - i - 1];
      } else {
         l_dp[i] = Math.max(l_dp[i - 1], height[i]);
         r_dp[n - i - 1] = Math.max(r_dp[n - i], height[n - i - 1]);
      }
   }
   for (let i = 0; i < n; ++i) {
      ans += Math.min(l_dp[i], r_dp[i]) - height[i];
   }
   return ans;
};
