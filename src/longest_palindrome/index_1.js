/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) {
    return s;
  }
  let len = s.length;
  let start = 0;
  let maxLen = 1;
  const expandAroundCenter = (left, right) => {
    // debugger;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        start = left;
      }
      left --;
      right ++;
    }
  }
  for (let i = 0; i < len; i ++) {
    expandAroundCenter(i - 1, i + 1);
    expandAroundCenter(i, i + 1);
  }
  return s.substr(start, maxLen);
};
console.log(longestPalindrome('cbbd'))
