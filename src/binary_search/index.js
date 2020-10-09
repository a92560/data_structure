function binarySearch(arr, target) {
  if (!Array.isArray(arr)) {
    return -1;
  }
  let begin = 0;
  let end = arr.length;
  while (begin < end) {
    let mid = Math.floor((begin + end) / 2);
    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      begin = mid + 1;
    }
  }
  return begin;
}
const arr = [1, 3, 4, 5, 7, 8, 9];
console.log(binarySearch(arr, 7))
