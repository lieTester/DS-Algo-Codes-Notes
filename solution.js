// Read write  data from a file
const fs = require("fs");
const read = () => {
   return fs.readFileSync("./input.txt", "utf8");
};

// Redirect console.log to output file
const output = fs.createWriteStream("./output.txt", { flags: "w" });
const originalLog = console.log;
console.log = (...messages) => {
   messages.forEach((message) => {
      // originalLog(message);
      output.write(`${message} `);
   });
   output.write(`\n`);
};

// #####################################################################################
// #####################################################################################
class Solution {
   constructor() {}

   // Function to compute maxProfit
   maxProfit(k, prices) {
      const n = prices.length;
      if (n <= 1 || k === 0) {
         return 0;
      }

      const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));

      for (let transaction = 1; transaction <= k; transaction++) {
         let maxMoneyAfterBuying = -prices[0];

         console.log(`Transaction ${transaction}:`);
         console.log(`Day 0: maxMoneyAfterBuying = ${maxMoneyAfterBuying}`);

         for (let day = 1; day < n; day++) {
            let profitIfSellToday = prices[day] + maxMoneyAfterBuying;
            let profitIfDoNothingToday = dp[transaction][day - 1];
            dp[transaction][day] = Math.max(
               profitIfDoNothingToday,
               profitIfSellToday
            );

            let potentialProfitFromPreviousTransactionMinusCurrentPrice =
               dp[transaction - 1][day] - prices[day];
            maxMoneyAfterBuying = Math.max(
               maxMoneyAfterBuying,
               potentialProfitFromPreviousTransactionMinusCurrentPrice
            );

            console.log(
               `Day ${day}: maxMoneyAfterBuying = ${maxMoneyAfterBuying}, ProfitoftheDay = ${dp[transaction][day]}`
            );
         }
         console.log(
            `Transaction ${transaction} Result: ${dp[transaction][n - 1]}`
         );
      }

      return dp[k][n - 1];
   }
}
const prices = [3, 2, 6, 5, 0, 3];
const k = 2;
const ob = new Solution();
const ans = ob.maxProfit(k, prices);

// Your console.log output will be redirected to output.txt from here
console.log(ans);
