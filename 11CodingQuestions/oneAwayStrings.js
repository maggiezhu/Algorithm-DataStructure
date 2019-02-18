// identical is also true
// abcde -> abcfe   change one character
// delete one character
// add one character 

//first check length of the two strings
//if different by more than 1, return false

// if they are the same, then -> change situation
// if not -> add / delete

//change: compare character one by one, count ++ if not the same
// return true if count ===1

// add/delete
//compare shorter string to larger, count = 1, when not the same 
//pointer to longer string ++, count --, if count <0 return false


function isOneAwaySameLength(s1, s2) {
  var count = 0;
  for (i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      count++;
    }
  }
  return count === 1;
}

function isOneAwayDiffLength(s1, s2) {
  var shorterLength = 0;
  var countdiff = 0;
  var shorterString = "";
  var longerString = "";
  if (s1.length > s2.length) {
    shorterLength = s2.length;
    shorterString = s2;
    longerString = s1;
  } else {
    shorterLength = s1.length;
    shorterString = s1;
    longerString = s2;
  }
  var i = 0;
  while (i < shorterLength) {
    if (longerString[i + countdiff] === shorterString[i]) {
      i++;
    } else {
      countdiff++;
    }
    if (countdiff > 1) {
      return false;
    }
  }
  return true;
}

function isOneAway(s1, s2) {
  //first check length of the two strings
  //if different by more than 1, return false
  if (s1.length === s2.length) {
    return isOneAwaySameLength(s1, s2);
  } else if (Math.abs(s1.length - s2.length) === 1) {
    return isOneAwayDiffLength(s1, s2);
  } else {
    return false;
  }
}
console.log(isOneAway("abc", "acbc"))