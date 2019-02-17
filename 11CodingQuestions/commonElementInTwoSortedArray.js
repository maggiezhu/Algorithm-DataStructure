// Find Common element in 2 sorted array
// A = [1,3,4,6,7,9]
//B = [1,2,4,5,9,10]
function findCommon(arr1, arr2) {
  //while not reaching end of any arr, 
  //if the avlue is the same, add to result
  //if a is larger, move b's pointer 
  //vice versa
  //return result
  var result = [];
  var i = 0;
  var j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return result;
}

console.log(findCommon([1, 3, 4, 6, 7, 8], [2, 4, 6, 9]));