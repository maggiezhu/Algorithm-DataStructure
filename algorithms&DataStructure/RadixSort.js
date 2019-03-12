function getDigit(number, digit) {
  //only for base 10 numbers
  return Math.floor(Math.abs(number) / Math.pow(10, digit)) % 10;
}

//How many digits are in a number
//this is how many times we need to put them into the baskets
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigit(arr) {
  let max = 0;
  for (var i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
}

function radixSort(nums) {
  let maxDigitCount = mostDigit(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({
      length: 10
    }, () => []);
    //put them into buckets
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    //take them out and put into a new array in the same order
    nums = [].concat(...digitBuckets);
  }
  return nums;
}


console.log(radixSort([1, 22, 546, 222222, 600]));