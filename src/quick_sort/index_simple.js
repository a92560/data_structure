function quickSort(arr) {
  return sortHelp(arr, 0, arr.length - 1)
}

function sortHelp(arr, start, end) {
  if (start >= end) {
    return;
  }
  let startIdx = start;
  let endIdx = end;
  let pivot = arr[start];
  while (startIdx < endIdx) {
    while (startIdx < endIdx && arr[endIdx] > pivot) {
      endIdx --;
    }
    if (startIdx < endIdx) {
      arr[startIdx] = arr[endIdx];
      arr[endIdx] = pivot;
      startIdx ++;
    }
    while (startIdx < endIdx && arr[startIdx] < pivot) {
      startIdx ++;
    }
    if (startIdx < endIdx) {
      arr[endIdx] = arr[startIdx];
      arr[startIdx] = pivot;
      endIdx --;
    }
  }
  arr[startIdx] = pivot;
  sortHelp(arr, start, startIdx - 1);
  sortHelp(arr, startIdx + 1, end);
  return arr;
}


const arr = [1, 2, 7, 8, 9, 3, 4, 5];
console.log(quickSort(arr));
