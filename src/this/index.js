Function.prototype.myCall = function(context, ...args) {
  if (typeof this !== 'function') {
    return new Error('第一个参数必须为函数')
  }
  let ctx = context == null ? window : context;
  // debugger;
  if (typeof ctx !== 'object') {
    // debugger;
    ctx = new ctx.__proto__.constructor(ctx);
  }
  const key = Symbol('Darren');
  ctx[key] = this;
  console.log('constructor:::', );
  const ret = ctx[key](...args);
  delete ctx[key];
  return ret;
}
window.key = 'Darren';
var key = 'Darren';
function test(number) {
  console.log(number)
  console.log(this)
  console.log(this && this.key);
}
test(2);
const obj = {
  key: 'obj_Darren',
}
test.myCall({}, 1)
