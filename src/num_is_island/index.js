var numIslands = function(grid) {
  if (!grid.length) {
    return 0;
  }
  if (!grid[0].length) {
    return 0;
  }
  debugger;
  let quantity = 0;
  const rowLen = grid.length;
  const colLen = grid[0].length;
  const DFS = (row, col, grid) => {
    if (row >= rowLen || col >= colLen || row < 0 || col < 0) {
      return;
    }
    if (grid[row][col] != '1') {
      return;
    }
    grid[row][col] = '0';
    DFS(row, col + 1, grid);
    DFS(row, col - 1, grid);
    DFS(row + 1, col, grid);
    DFS(row - 1, col, grid);
  }
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; i < colLen; j++) {
      if (grid[i][j] === '1') {
        quantity += 1;
        DFS(i, j, grid);
      }
    }
  }
  return quantity
}

numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]);
