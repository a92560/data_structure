export function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

export function hasOwn(target, key) {
  return target.hasOwnProperty(key);
}
