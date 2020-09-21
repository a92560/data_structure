function sumStr(str1, str2) {
  if (!str1) {
    return parseInt(str1);
  }
  if (!str2) {
    return parseInt(str2);
  }
  let step = 0;
  let str = ''
  const len1 = str1.length;
  const len2 = str2.length;
  const len = Math.max(len1, len2);
  for (let i = -1; i >= -len; i --) {
    const n1 = str1.slice(i, (i + 1 || undefined)) - 0;
    const n2 = str2.slice(i, (i + 1 || undefined)) - 0;
    const res = n1 + n2 + step;
    if (res > 9) {
      str = (res - 10) + str;
      step = 1;
    } else {
      str = res + str;
      step = 0;
    }
  }
  return step === 1 ? step + str : str;
}
let ret = sumStr('9999999999999', '66') + '';
ret = ret.replace(/\B(?=(?:(\d{3})+$))/g, ',')
console.log(ret)
