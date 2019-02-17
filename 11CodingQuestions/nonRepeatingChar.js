//input: a string
//output: the first character that only appear once
// "aayx" => y
//   "abbc" => a

function nonRepeatChar(str) {
  //{}
  //for every char in the string, put char as key
  //the index as value
  //if the char is already in it, change the value to -1
  //at the end check the hash table, for the smallest value greater than 0
  //return that char 
  //OR go throught the array again and find the first value = 1
  var result = {};
  for (var i = 0; i < str.length; i++) {
    if (str[i] in result) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }
  console.log(result);
  for (i = 0; i < str.length; i++) {
    if (result[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
}
console.log(nonRepeatChar("bbb"));