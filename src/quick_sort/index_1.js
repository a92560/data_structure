function quickSort(arr) {
  sortHelp(arr, 0, arr.length - 1)
  return arr;
}

function sortHelp(arr, begin, end) {
  if (begin >= end) return;
  let startIdx = begin;
  let endIdx = end;
  let pivot = arr[begin];
  while (startIdx < endIdx) {
    while (startIdx < endIdx && pivot < arr[endIdx]) {
      endIdx --;
    }
    if (startIdx < endIdx) {
      arr[startIdx] = arr[endIdx];
      arr[endIdx] = pivot;
      startIdx ++;
    }
    while (startIdx < endIdx && pivot > arr[startIdx]) {
      startIdx ++;
    }
    if (startIdx < endIdx) {
      arr[endIdx] = arr[startIdx];
      arr[startIdx] = pivot;
      endIdx --;
    }
  }
  arr[startIdx] = pivot;
  sortHelp(arr, begin, startIdx - 1);
  sortHelp(arr, startIdx + 1, end);
  return arr;
}
const arr = [1, 2, 7, 8, 9, 3, 4, 5];
console.log(quickSort(arr));
