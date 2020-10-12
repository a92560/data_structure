function insertSort(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  for (let i = 1; i < arr.length; i ++) {
    const value = arr[i];
    let j = i - 1
    for (; j >= 0; j --) {
      if (arr[j] < value) {
        break
      } else {
        arr[j + 1] = arr[j];
      }
    }
    arr[j + 1] = value;
  }
  return arr;
}

console.log(insertSort([4, 5, 6, 1, 3, 2]));
