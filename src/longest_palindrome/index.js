/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let n = s.length;
  if (n < 2) {
    return s;
  }
  let max = 1;
  let begin = 0;
  let dp = Array.from(new Array(n),() => new Array(n).fill(0));
  for(let i = n - 1; i >= 0; i--){
    dp[i][i] = 1
    for(let j = i; j < n; j++){
      dp[i][j] = s[i] === s[j] && ( j - i < 2 || dp[i+1][j-1])
      if(dp[i][j] && j - i + 1 > max) {
        max = j - i + 1;
        begin = i;
      }
      /*if (s[i] !== s[j]) {
        dp[i][j] = 0
      } else {
        if (j - i < 3) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j] && i - j + 1 > max) {
        max = i - j + 1;
        begin = j;
      }*/
    }
  }
  return s.substr(begin, max);
};
console.log(longestPalindrome('babad'))
