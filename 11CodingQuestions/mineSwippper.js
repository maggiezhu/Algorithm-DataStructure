//input: 2D array, num_rows,num_cols
//output: 2D array

// first use the row and col input to construct an empty 2D array
// i represent rows and j as cols,
// find array[i][j] change to -1, for i-1~i+1, j-1~j+1, arry[i][j]++;
//except for the bumb cell


// [
//   [0, 2],
//   [2, 0], 3, 3
// ]

// [
//   [0, 1, -1],
//   [1, 2, 1],
//   [-1, 1, 0]
// ]

function mineSwipper(array, row, col) {
  var result = [];
  for (let i = 0; i < row; i++) {
    let row = [];
    result[i] = row;
    for (let j = 0; j < col; j++) {
      result[i][j] = 0;
    }
  }
  for (bomb of array) {
    let row_id = bomb[0];
    let col_id = bomb[1];
    result[row_id][col_id] = -1;
    for (let i = row_id - 1; i <= row_id + 1; i++) {
      for (let j = col_id - 1; j <= col_id + 1; j++) {
        if (0 <= i && i < row && 0 <= j && j < col) {
          if (result[i][j] !== -1) {
            result[i][j] += 1;
          }
        }
      }

    }
  }
  console.log(result);
}

mineSwipper([
  [0, 2],
  [2, 0]
], 3, 3);