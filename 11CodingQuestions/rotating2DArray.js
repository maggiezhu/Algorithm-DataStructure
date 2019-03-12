// input: col === row
// rotate it by 90 degree, first row become the last col

//Out of place Solution:
// new_i = j
//new_j = n-1 -i 
// (there were i rows before i, should there should be i columns after i after rotation)
// create a new array with the same size
//(new_i,new_j) = (i,j)in original 

function outOfPlaceRotate2dArray(array, n) {
  let newArray = [];

  for (let i = 0; i < n; i++) {
    newArray.push([]);
    for (let j = 0; j < n; j++) {
      newArray[i][j] = 0;
    }
  }

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      newArray[j][n - 1 - i] = array[i][j];
    }
  }
  return newArray;

}


function InPlaceRotate(array, n) {

}

console.log(rotate2dArray([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 0],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
], 5));