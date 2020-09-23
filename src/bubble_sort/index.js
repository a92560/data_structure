function bubbleSort(arr) {
  const len = arr.length;
  let sorted = true;
  for (let end = len - 1; end > 0; end --) {
    for (let start = 0; start < end; start ++) {
      if (arr[start] > arr[start + 1]) {
        let temp = arr[start];
        arr[start] = arr[start + 1];
        arr[start + 1] = temp;
        sorted = false;
      }
    }
    // 优化
    if (sorted) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([1, 3, 5, 2, 4, 7, 6, 9]))
