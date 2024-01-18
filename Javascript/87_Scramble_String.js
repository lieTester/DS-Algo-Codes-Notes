var isScramble = function (s1, s2) {
   // Check if the lengths of the strings are different; if so, they cannot be scrambles
   if (s1.length !== s2.length) return false;

   // Memoization map to store computed results for string combinations
   const memo = new Map();

   // Recursive function to check if strings are scrambles
   const dfs = (str1, str2) => {
      // If the result for this combination has been memoized, return it directly
      if (memo.has(`${str1}-${str2}`)) return memo.get(`${str1}-${str2}`);

      // Base case: If both strings are equal, they are scrambles
      if (str1 === str2) return true;

      const len = str1.length;

      // Explore all possible split positions to check for scrambles
      for (let i = 1; i < len; ++i) {
         // Two scenarios are possible:
         // 1. No swap between substrings
         const case1 =
            dfs(str1.substring(0, i), str2.substring(0, i)) &&
            dfs(str1.substring(i), str2.substring(i));
         // 2. Swap between substrings
         const case2 =
            dfs(str1.substring(0, i), str2.substring(len - i)) &&
            dfs(str1.substring(i), str2.substring(0, len - i));

         // If either case1 or case2 results in true, the strings are scrambles
         if (case1 || case2) {
            memo.set(`${str1}-${str2}`, true); // Memoize the result as true
            return true;
         }
      }

      // Memoize the result as false and return false (strings are not scrambles)
      memo.set(`${str1}-${str2}`, false);
      return false;
   };

   // Begin the recursive check for scrambles with the input strings
   return dfs(s1, s2);
};
