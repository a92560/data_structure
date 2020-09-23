// 1. 从序列中找出最大的那个元素，然后与最末尾的元素交换位置
// 2. 执行完一轮之后，最末尾的那个就是最大的元素

const arr = [10, 10, 9, 8];

function selectionSort(arr) {
  // let max = 0;
  for (let i = 0; i < arr.length; i ++) {
    let maxIdx = 0;
    for (let j = 0; j < arr.length - i ; j ++) {
      // 为了稳定的排序算法
      if (arr[j] >= arr[maxIdx]) {
        maxIdx = j;
      }
    }
    let temp = arr[maxIdx];
    arr[maxIdx] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(selectionSort(arr));
