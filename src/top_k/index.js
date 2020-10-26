function quickSelect(arr, left, right, k) {
  let pivot = arr[left];
  let start = left;
  let end = right;
  while (start <= end) {
    while (start <= end && arr[start] > pivot) {
      start ++
    }
    while (start <= end && arr[end] < pivot) {
      end --
    }
    if (start <= end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start ++;
      end --;
    }
  }
  if (left + k - 1 <= end) {
    quickSelect(arr, left, end, k);
  }
  if (left + k - 1 >= start) {
    quickSelect(arr, start, right, k - (start - left));
  }
}
