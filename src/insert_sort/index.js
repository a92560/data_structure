// 1. 在执行过程中，插入排序会将序列分为两部分
    // 1.1 头部是已经排好序的，尾部是待排序的
// 2. 从头开始扫描每一个元素
    // 2.1 每当扫描到一个元素，就将它插入到头部合适的位置，使得头部的数据依然保持有序

// 逆序对
// 9,8,7,6,5,4,3,2
// 插入排序的时间负责度与逆序对的数量成正比关系
// 逆序对的数量越多，插入排序的时间复杂度越高
const arr = [1, 3, 4, 5, 2, 7, 8, 6];

function insertSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i ++) {
    let j = i;
    while (arr[j] < arr[j - 1] && j > 0) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j --;
    }
  }
  return arr;
}

console.log(insertSort(arr))
