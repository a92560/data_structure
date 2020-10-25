// /**
//  * @param {string} s
//  * @return {string}
//  */
// var decodeString = function(s) {
//   if (!s) {
//     return s;
//   }
//   const len = s.length;
//   const strList = [];
//   const countList = [];
//   let time = 0;
//   let res = '';
//   debugger;
//   for (let i = 0; i < len; i ++) {
//     if (parseInt(s[i])) {
//       time = time * 10 + (s[i] - 0);
//     } else if (s[i] === '[') {
//       countList.push(time);
//       strList.push(res);
//       time = 0;
//       res = '';
//     } else if (s[i] === ']') {
//       let count = countList.pop();
//       let str = strList.pop();
//       while (count) {
//         str += res;
//         count -= 1;
//       }
//       res = str;
//     } else {
//       res += s[i];
//     }
//   }
//   return res;
// };
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  if (!s) {
    return ''
  }
  const len = s.length;
  const strList = [];
  const countList = [];
  let res = '';
  let time = 0;
  debugger;
  for (let i = 0; i < len; i ++) {
    if (/\d+/g.test(s[i])) {
      time = time * 10 + (s[i] - 0);
    } else if (s[i] === '[') {
      countList.push(time);
      strList.push(res);
      time = 0;
      res = '';
    } else if (s[i] === ']') {
      let count = countList.pop();
      let str = strList.pop();
      while (count) {
        str += res;
        count -= 1;
      }
      res = str;
    } else {
      res += s[i];
    }
  }
  return res;
};
decodeString('3[a2[c]]');
