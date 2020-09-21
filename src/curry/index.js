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

function curry(fn, args) {
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
}
const add = (a, b, c, d) => {
  return a + b + c + d;
}
const curryAdd = curry(add);
console.log(curryAdd(1)(2)(3)(4));
console.log(curryAdd(1, 2)(3, 4));
