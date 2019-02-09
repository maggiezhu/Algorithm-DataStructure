function binarySearch(ary, target) {
  // add whatever parameters you deem necessary - good luck!
  var left = 0;
  var right = ary.length - 1;
  while (left <= right) {
    var mid = parseInt((right + left) / 2);
    if (ary[mid] < target) {
      left = mid + 1;
    } else if (ary[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));