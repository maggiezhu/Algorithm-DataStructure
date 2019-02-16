function InsertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var current = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) { //loop over sorted array
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(InsertionSort([9, 10, 5, 3]));