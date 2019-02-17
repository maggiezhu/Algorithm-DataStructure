function mostFrequent(arr) {
  var hash = {};
  for (i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]] += 1;
    } else {
      hash[arr[i]] = 1; //initialize hash
    }
  }
  var maxCount = 0;

  for (var element in hash) {
    console.log(element);
    if (maxCount === 0) {
      //initialize 
      maxCount = hash[element];
    }
    if (hash[element] >= maxCount) {
      maxKey = element;
      maxCount = hash[element];
    }
  }
  return maxKey;
}

console.log(mostFrequent([1, 3, 1, 3, 2, 1]));