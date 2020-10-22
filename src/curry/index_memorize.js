// function curry(fn, ...args) {
//   args = args ? args : [];
//   const len = fn.length;
//   return function() {
//     let args = args.slice(0);
//     args = args.concat([...arguments]);
//     if (args.length < len) {
//       return curry.call(this, fn, args);
//     }
//     return fn.apply(this, args);
//   }
// }
//
// const add = (a, b, c, d) => {
//   return a + b + c + d;
// }
//
// const curryAdd = curry(add);
//
// console.log(curryAdd(1)(2)(3)(4));

/*function curry(fn, args) {
  const length = fn.length;
  args = args || [];
  return function() {
    const _args = args.slice(0).concat([...arguments]);
    if (_args.length < length) {
      return curry.call(this, fn, _args);
    } else {
      return fn.apply(this, _args);
    }
  }
}*/
/**
 * @param {function} fn - 需要执行的函数
 * @param {array} args - 可能传入的参数
 * @return {function} anomynous - 返回函数
 * @description: 偏函数
 * @author: Darren
 * @date: 2020/10/18
 */
function curry(fn, args) {
  const len = fn.length;
  args = args || [];
  return function() {
    let _args = args.concat([...arguments]);
    if (_args.length < len) {
      return curry.call(this, fn, _args);
    } else {
      return fn.apply(this, _args);
    }
  }
}
const add = (a, b, c, d) => {
  return a + b + c + d;
}
const curryAdd = curry(add);
// const curryAdd1 = curry(add)(1)(3)(5);
console.log(curryAdd(1)(2)(3)(4));
console.log(curryAdd(1, 2)(3, 4));
// console.log(curryAdd1(7));
// console.log(curryAdd1(9));
