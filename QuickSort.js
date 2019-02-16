function pivot(arr, start, end) { //move all value greater than a value and less to 2 side
  //return the correct index of povot 
  //we choose the first value to be the pivot
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  var pivot = arr[start];
  var swapIdx = start;
  for (i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, swapIdx, start);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    //left side
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;

}


console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));