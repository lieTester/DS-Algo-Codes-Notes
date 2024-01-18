var wordBreak = function (s, wordDict) {
   const n = s.length; // Get the length of the input string
   wordDict = new Set(wordDict); // Convert the wordDict array to a Set for faster lookup

   const dp = new Map(); // Create a map to store calculated results for specific indices

   // Recursive function to break the string into words
   const dfs = (indx) => {
      if (indx >= n) return []; // If the index is out of bounds, return an empty array
      if (dp.has(indx)) return dp.get(indx); // If the index is memoized, return the memoized result

      const ans = []; // Array to store valid word breaks starting from the current index
      for (let j = indx; j < n; ++j) {
         const tString = s.slice(indx, j + 1); // Extract substring from the current index to j

         // Check if the substring exists in the wordDict (valid word)
         if (wordDict.has(tString)) {
            if (j === n - 1) {
               // If reaching the end of the string, add the current word to the result array
               ans.push(tString);
            } else {
               // Recursively find word breaks for the remaining substring
               const tempAns = dfs(j + 1);
               // Concatenate the current word with the results from the remaining substring
               for (const value of tempAns) {
                  ans.push(tString + " " + value);
               }
            }
         }
      }

      // Memoize the result for the current index
      dp.set(indx, ans);
      return ans;
   };

   return dfs(0); // Start the recursive function from index 0 and return the final result
};
