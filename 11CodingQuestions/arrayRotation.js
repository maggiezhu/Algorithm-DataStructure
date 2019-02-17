// is one array an rotation of another?
//A = [1,2,3,4,5,6,7]
//B = [4,5,6,7,1,2,3]

// first: check if they have the same length, return false if not
//starting from the first element in A, find it in b and start compareing there
// until the end of A 
// return false if at any point the value is not the same

function arrayRotation(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  var indexInarr2 = -1;;
  for (var j = 0; j < arr2.length; j++) {
    if (arr2[j] === arr1[0]) {
      indexInarr2 = j;
    }
  }
  if (indexInarr2 === -1) {
    return false;
  }
  console.log(indexInarr2);
  for (var i = 0; i < arr1.length; i++) {
    if (indexInarr2 >= arr2.length) {
      indexInarr2 = 0;
    }
    if (arr1[i] !== arr2[indexInarr2]) {
      return false;
    }
    indexInarr2++;
  }
  return true;
}



console.log(arrayRotation([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 1, 2, 3]));