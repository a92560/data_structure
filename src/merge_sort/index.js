/*
*
* 1. 不断地将当前序列平均分割成2个子序列
*   1.1 直到不能再分割（序列中只剩一个元素）
* 2. 不断地将两个子序列合并成一个有序序列
*   2.1 直到最终只剩一个子序列
* */
function mergeSort(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  if (arr.length === 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  // console.log('left:', left);
  const right = mergeSort(arr.slice(mid, arr.length));
  // console.log('right:', right);
  console.log('merge(left, right)', merge(left, right));
  return merge(left, right);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const ret = [];
  while (i < left.length && j < right.length) {
    if (left[i] >= right[j]) {
      ret.push(right[j])
      j += 1;
    } else {
      ret.push(left[i]);
      i += 1;
    }
  }
  while (i < left.length) {
    ret.push(left[i++])
  }
  while (j < right.length) {
    ret.push(right[j++])
  }
  return ret;

}
const ret = mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(ret)
/*function mergeSort(array) {
  if (array.length === 1)
    return array
  let m = Math.floor(array.length / 2)
  let B = mergeSort(array.slice(0, m))
  let C = mergeSort(array.slice(m, array.length))
  let A_sorted = merge(B, C)

  return A_sorted;
}

function merge(B, C) {
  let i = 0
  let j = 0
  let D = []
  while(i < B.length && j < C.length){
    if (B[i] <= C[j]){
      D.push(B[i++])
    } else {
      D.push(C[j++])
    }
  }
  while (i < B.length) D.push(B[i++])
  while (j < C.length) D.push(C[j++])

  return D
}

let a = mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(a)*/
