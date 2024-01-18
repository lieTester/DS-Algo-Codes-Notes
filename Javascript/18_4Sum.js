/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
   nums.sort((a, b) => a - b); // Corrected sorting

   var n = nums.length;
   var ans = [];

   for (var i = 0; i < n - 3; ++i) {
      if (i > 0 && nums[i] == nums[i - 1]) continue;

      for (var j = i + 1; j < n - 2; ++j) {
         if (j > i + 1 && nums[j] == nums[j - 1]) continue;

         var k = j + 1,
            l = n - 1;

         while (k < l) {
            var temp = nums[i] + nums[j] + nums[k] + nums[l];

            if (temp === target) {
               ans.push([nums[i], nums[j], nums[k], nums[l]]);
               do {
                  k++;
               } while (nums[k] == nums[k - 1] && k < l);
               do {
                  l--;
               } while (nums[l] == nums[l + 1] && k < l);
            } else if (temp < target) {
               ++k;
            } else {
               --l;
            }
         }
      }
   }

   return ans;
};
