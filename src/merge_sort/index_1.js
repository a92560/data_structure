function mergeSort(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  if (arr.length <= 1) {
    return arr;
  }
  const begin = 0;
  const end = arr.length;
  const mid = Math.floor(end / 2);
  const left = mergeSort(arr.slice(begin, mid))
  const right = mergeSort(arr.slice(mid, end));
  return merge(left, right);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const ret = [];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      ret.push(left[i++]);
    } else {
      ret.push(right[j++]);
    }
  }
  while (i < left.length) {
    ret.push(left[i++])
  }
  while (j < right.length) {
    ret.push(right[j++]);
  }
  return ret;
}


const ret = mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(ret)
