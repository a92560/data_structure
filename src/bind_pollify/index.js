function myBind(context, ...args) {
  let ctx = context == null ? window : context;
  let fn = this;
  return function () {
    return fn.apply(ctx, [...arguments, ...args]);
  }
}
Function.prototype.myBind = myBind;
window.name = 'Darren';
var obj = { name: 'Darren1' };
function test(num1, num2) {
  console.log(this.name);
  console.log(num1, num2);
}
test(2, 3);
test.myBind(obj, 1)(2);


