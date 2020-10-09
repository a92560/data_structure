function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const len = arr.length;
  let sorted = true;
  for (let i = 0; i < len; i ++) {
    for (let j = 0; j < len - i; j ++) {
      if (arr[j + 1] < arr[j]) {
        sorted = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (sorted) {
      return arr;
    }
  }
  return arr;
}
const arr = [1, 3, 2, 7, 9, 4, 5, 6];
console.log(bubbleSort(arr))
