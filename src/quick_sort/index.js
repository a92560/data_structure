function quickSort(arr) {
  sortHelp(0, arr.length)
  return arr;
}

function sortHelp(begin, end) {
  if (end - begin < 2) return;
  const mid = sort(begin, end);
  sortHelp(begin, mid);
  sortHelp(mid + 1, end);
}

function sort(begin, end) {
  const cur = arr[begin];
  end --;
  debugger;
  while (begin < end) {
    // 从右往左扫描
    while (begin < end) {
      if (cur < arr[end]) {    // 右边元素  > 轴点元素
        end--;
      } else { // 右边元素 <= 轴点元素
        arr[begin++] = arr[end];
        break;
      }
    }
    // 从左往右扫描
    while (begin < end) {
      if (cur > arr[begin]) {
        begin++;
      } else {
        arr[end--] = arr[begin];
        break;
      }
    }
  }
  arr[begin] = cur;
  return begin
}
const arr = [1, 2, 7, 8, 9, 3, 4, 5];
console.log(quickSort(arr));
