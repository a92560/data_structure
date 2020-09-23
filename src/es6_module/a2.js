const num = 1;
let obj = {
  name: 'DARREN',
}
exports.num = num
exports.obj = obj

setTimeout(() => {
  console.log(num);
  console.log(obj.name);
}, 1000);
