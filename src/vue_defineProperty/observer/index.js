import { Dep } from './dep'
export class Observe {
  constructor(value) {
    this.value = value;
    if (Array.isArray(value)) {
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }


  observeArray(value) {

  }

  walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i ++) {
      defineReactive(obj, keys[i]);
    }
  }

}

function defineReactive(obj, key) {
  const dep = new Dep();
  let childOb = observe(obj);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    set(newVal) {
      if (Dep.target) {
        dep.depend();
      }
    },
    get() {
      dep.notify();
    }
  })

}

export let shouldObserve = true;

export function observe(value) {
  let ob;
  if (value.__ob__) {
    ob = value.__ob__;
  } else if (shouldObserve) {
    ob = new Observe(value);
  }
  return ob;
}
