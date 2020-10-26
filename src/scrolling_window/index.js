function minSubArrayLen(s, nums) {
  if (!nums.length) {
    return 0;
  }
  let matched = true;
  let minLen = s;
  let sum = 0;
  let left = 0;
  const len = nums.length;
  for (let i = 0; i < len; i ++) {
    // debugger;
    sum = sum + nums[i];
    while (sum >= s) {
      matched = false;
      if (i - left + 1 < minLen) {
        minLen = i - left + 1;
      }
      sum -= nums[left];
      left += 1;
    }
  }
  if (matched) return 0;
  return minLen
}
console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
