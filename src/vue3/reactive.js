/*
* vue3.0响应式原理
* vue2.0响应式存在的问题
* 1. 2.0默认会递归
* 2. 数组直接改变对应下标的值/length属性 是无效的
* 3. 对象不存在的属性不能被代理
* */

import { isObject, hasOwn } from './utils';

let toProxy = new WeakMap(); // 弱引用映射表 es6 放置的是 原对象: 代理过的对象
let toRaw = new WeakMap(); // 代理过的对象： 原对象

// 1. 响应式的核心方法
function reactive(target) {
  return createReactiveObject(target);
}

function createReactiveObject(target) {
  // debugger;
  if (!isObject(target)) {
    return target;
  }
  let proxy = toProxy.get(target); // 如果代理过了 直接返回即可
  if (proxy) {
    return proxy;
  }
  if (toRaw.has(target)) {
    return target;
  }
  let baseHandler = {
    // reflect优点  有返回值 不会报错
    /*
    * target 原对象
    * key 字段
    * receiver 代理过的对象
    * */
    get(target, key, receiver) {
      // 怎么识别是 修改/新增属性
      // console.log(target, key, receiver);
      let result = Reflect.get(target, key, receiver);
      track(target, key); // 如果目标上的这个key变化了 重新让数组中的effect执行
      return isObject(result) ? reactive(result) : result;
    },
    set(target, key, value, receiver) {
      // console.log(target, key, receiver);
      let hasKey = hasOwn(target, key);
      let oldVal = target[key];
      let res = Reflect.set(target, key, receiver);
      // 收集依赖

      if (!hasKey) {
        // console.log('新增属性');
        trigger(target, 'add', key);
      } else if (value !== oldVal) {
        trigger(target, 'set', key); // 如果目标上的这个key变化了 重新让数组中的effect执行
        // console.log('res oldVal', res, oldVal);
        // console.log('修改属性');
      }
      return res;
    },
    deleteProperty(target, key) {
      let res = Reflect.deleteProperty(target, key);
    },
  };
  let observed = new Proxy(target, baseHandler);
  toProxy.set(target, observed);
  toRaw.set(observed, target);
  return observed;
}

// 栈 先进后出
let activeEffectStacks = []; // 栈型结构
// 响应式 副作用
function effect(fn) {
  // 需要把fn这个函数变成响应式的函数
  let effect = createReactiveEffect(fn);
  effect(); // 默认应该先执行一次
}

function createReactiveEffect(fn) {
  let effect = function () { // 这个就是创建的响应式的effect
    return run(effect, fn); // 运行 1. 让fn运行， 第二个就是将effect存到栈中
  }
  return effect;
}

function run(effect, fn) {
  try {
    activeEffectStacks.push(effect);
    fn();
  } finally {
    activeEffectStacks.pop();
  }

}

let targetsMap = new WeakMap();
// 收集依赖
function track(target, key) { // 如果对应target的key发生变化了 我就执行数组里的方法
  let effect = activeEffectStacks[activeEffectStacks.length - 1];
  if (effect) { // 有对应关系 创建关联
    let depsMap = targetsMap.get(target);
    if (!depsMap) {
      targetsMap.set(target, depsMap = new Map);
    }
    let deps = depsMap.get(key);
    if (!deps) {
      depsMap.set(key, deps = new Set)
    }
    if (!deps.has(effect)) {
      deps.add(effect);
    }

    // 动态创建依赖关系
  }
  // 什么都不做
}

function trigger(target, type, key) {
  let depsMap = targetsMap.get(target);
  if (depsMap) {
    let deps = depsMap.get(key);
    if (deps) {
      deps.forEach(effect => {
        effect();
      })
    }
  }
}

// let proxy = reactive({ a: { b: 1 } });
// proxy.a.name = 'Darren';
// console.log(proxy)
let proxy = reactive({ name: 'Darren' });

effect(() => { // effect会先执行两次 默认会先执行一次 之后依赖的数据变化了 会再次执行
  console.log('effect', proxy.name)
})
proxy.name = 'Darren1'
proxy.name = 'Darren1'
// console.log(proxy)
