function countString(string, targetStr) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if ((i + targetStr.length) <= string.length && string.substring(i, i + targetStr.length) === targetStr) {
      count++;
    }
  }
  return count;
}
/*
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}
*/

//console.log(countString("bababcabcabc", 'abc'))
console.log(countString("lorie loled", "lol"));