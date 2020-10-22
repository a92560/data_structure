/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  if (!matrix[0]) {
    return []
  }
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let direction = 'right';
  const ret = [];
  while (left <= right && top <= bottom) {
    if (direction === 'right') {
      for (let i = left; i <= right; i ++) {
        ret.push(matrix[top][i]);
      }
      top ++;
      direction = 'down';
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i ++) {
        ret.push(matrix[i][right]);
      }
      right --;
      direction = 'left';
    } else if (direction === 'left') {
      for (let i = right; i >= left; i --) {
        ret.push(matrix[bottom][i]);
      }
      bottom --;
      direction = 'top';
    } else if (direction === 'top') {
      for (let i = bottom; i >= top; i --) {
        ret.push(matrix[i][left]);
      }
      left ++;
      direction = 'right';
    }
  }
  return ret;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
