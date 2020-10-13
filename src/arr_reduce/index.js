/**
 * 数组去重
 * @param {*} arr 接收的原数组
 * @param {*} key 如果是对象数组[{id: 1, value: 'a'}, {id: 2, value: 'b'}, {id: 3, value: 'c'}, {id: 3, value: 'c_copied'}]，则需要以什么key作为重复的标准，普通数组[1,2,3,2]不需要
 */

export function uniqueArr(arr, key) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const type = /\[object (\w+)\]/.exec(Object.prototype.toString.call(arr));
  console.log(type);
  // if (!.test()) {}
  if (key) {
    const map = {};
    return arr.reduce((cur, next) => {
      !map[next[key]] && (map[next[key]] = true && cur.push(next))
      return cur;
    }, [])
  }
}
const objArr = [{id: 1, value: 'a'}, {id: 2, value: 'b'}, {id: 3, value: 'c'}, {id: 3, value: 'c_copied'}];
console.log(uniqueArr(objArr, 'id'));
