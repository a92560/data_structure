function myNew(fn, ...args) {
  if (!fn.prototype) {
    return;
  }
  const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, args);
  if (ret !== null && /^(object|function)$/.test(typeof ret)) {
    return ret;
  }
  return obj;
}
