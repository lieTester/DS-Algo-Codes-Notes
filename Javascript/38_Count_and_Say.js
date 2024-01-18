/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
   if (n === 1) return "1";
   if (n === 2) return "11";
   var tempAns = countAndSay(n - 1);
   var ans = "",
      count = 0;
   for (var i = 0; i <= tempAns.length; ++i) {
      if (
         i === 0 ||
         (i > 0 && i < tempAns.length && tempAns[i] === tempAns[i - 1])
      ) {
         count += 1;
         continue;
      }
      ans += count + tempAns[i - 1];
      count = 1;
   }
   return ans;
};
