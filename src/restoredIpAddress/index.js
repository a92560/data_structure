/**
 * @param {string} s
 * @return {string[]}
 */
// var restoreIpAddresses = function(s) {
//   if (!s) {
//     return [];
//   }
//   const ret = [];
//   const helper = (subRes, start) => {
//     if (subRes.length === 4 && start === s.length) return ret.push(subRes.join('.'));
//     if (subRes.length === 4 && start < s.length) return;
//     debugger;
//     for (let i = 1; i < 4; i ++) {
//       if (start + i - 1 > s.length) return;
//       let subStr = s.substring(start, start + i);
//       if ((subStr.startsWith('0') && subStr.length > 1) || (i === 3 && +subStr >= 256)) return;
//       subRes.push(subStr);
//       helper(subRes, start + i);
//       subRes.pop();
//     }
//   }
//   helper([], 0);
//   return ret;
// };
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (!s) {
    return [];
  }
  const ret = [];
  const dfs = (s, idx, path, num) => {
    if (num > 4) return;
    if (num === 4 && idx === s.length) return ret.push(path);
    // debugger;
    for (let i = 1; i < 4; i ++) {
      // if (idx + i - 1 > s.length) return;
      let subStr = s.substring(idx, idx + i);
      if ((subStr.startsWith('0') && subStr.length > 1) || (i === 3 && +subStr >= 256)) return;
      // subRes.push(subStr);
      dfs(s, idx + i, path + subStr + (num === 3 ? '' : '.'), num + 1);
      // subRes.pop();
    }
  }
  dfs(s, 0, '', 0);
  return ret;
};
console.log(restoreIpAddresses("25525511135"));
