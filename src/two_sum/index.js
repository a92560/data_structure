function twoSum( numbers ,  target ) {
  // write code here
  if (!numbers.length) return [];
  let obj = {};
  debugger;
  for (let i = 0; i < numbers.length; i ++) {
    const dif = target - numbers[i]
    if (obj[dif]) {
      return [obj[target - numbers[i]] + 1, i + 1];
    }
    obj[numbers[i]] = i;
  }
  return []
}

twoSum([3,2,4],6)
