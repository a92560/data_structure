function compose(middlewares) {
  return function(context, next) {
    let index = -1;
    return dispatch(0)
    function dispatch(i) {
      index = i;
      let fn = middlewares[i];
      if (i === middlewares.length) {
        fn = next;
      }
      if (!fn) return Promise.resolve();
      return Promise.resolve(fn(context, function next() {
        return dispatch(i + 1);
      }))
    }
  }
}

async function a (context,next) {
  console.log('1.函数 【a】next之前-执行了.....')
  await next()
  console.log('8.函数 【a】next之后-执行了.....')
}
async function b (context, next) {
  console.log('2.函数 【b】next之前-执行了.....')
  await next()
  console.log('7.函数 【b】next之后-执行了.....')
}
async function c (context, next) {
  console.log('3.函数 【c】next之前-执行了.....')
  await next()
  console.log('6.函数 【c】next之后-执行了.....')
}

async function d (context, next) {
  console.log('4.函数 【d】next之前-执行了.....')
  console.log('5.函数 【d】next之后-执行了.....')
}

var composeMiddles1 = compose([a,b,c,d])
composeMiddles1()
