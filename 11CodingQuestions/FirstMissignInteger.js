var firstMissingPositive = function (nums) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      result[nums[i]] = nums[i];
    }
  }
  console.log(result);
  for (var j = 1; j <= result.length; j++) {
    console.log(result[j], j);
    if (result[j] === undefined) {
      return j;
    }
  }
  return 1;
};

console.log(firstMissingPositive([1, 2, 0]));