function LCS( str1 ,  str2 ) {
  const n = str1.length;
  const m = str2.length;
  if (!n || !m) {
    return -1;
  }
  let begin = 0;
  let max = 0;
  const dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i ++) {
    for (let j = 1; j <= m; j ++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      if (dp[i][j] > max) {
        // debugger;
        // console.log(dp[i][j])
        // console.log(i, j)
        max = dp[i][j];
        start = i - max;
      }
    }
  }
  // debugger;
  // debugger;
  // console.log(max);
  // console.log(begin);
  return str1.substr(start, max);
}
console.log(LCS('1AB12F345FCD', '12A3F45EF'));
// 5L倒满 -> 倒满3L -> 5L剩2L -> 3L清空 -> 倒入2L -> 5L清空
// 5L倒满 -> 倒满3L -> 5L剩下的为4L
