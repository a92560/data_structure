function change(str) {
  let tempStr = str.split(',');
  if (!tempStr.length) {
    return str;
  }
  // debugger;
  const len = tempStr.length;
  let ret = [];
  let finalRet = [];
  for (let i = 0; i < len; i ++) {
    if (!ret.length) {
      ret.push(tempStr[i])
    } else {
      if (tempStr[i] - ret[ret.length - 1] !== 1) {
        const first = ret[0];
        const last = ret[ret.length - 1];
        finalRet.push(`${first}~${last}`);
        ret = [];
      }
      ret.push(tempStr[i]);
    }
  }
  if (ret.length === 1) {
    return finalRet.concat(ret[0]).join(',');
  } else if (ret.length > 1) {
    const first = ret[0];
    const last = ret[ret.length - 1];
    return finalRet.concat(`${first}~${last}`).join(',');
  }
  return finalRet.join(',');
}
console.log(change('1,2,5,6,8,9,10'))
