/*
- understand problem: input, output
- Come up of examples: base and edge examples, empty input
*/

//***************************************************************
//                   Frequency Counter
//***************************************************************
// Question:
// compare two array of numbers, number in first array must have a corresponding value in the second array
//Method:
// squre the first one and put counter in an object
// find the second one and subtract form the counter object for first arry
// check result object have 0 for all values
//OR
//generate two frequency objects and compare using key in object2 

// function matchAry(ary1, ary2) {

//   if (ary1.length !== ary2.length) {
//     return false;
//   }
//   let freq1 = {};

//   for (let number of ary1) {
//     freq1[number * number] = ++freq1[number * number] || 1;
//     console.log(freq1);
//   }
//   for (let squaredNumber of ary2) {
//     if (freq1[squaredNumber]) {
//       freq1[squaredNumber] -= 1;
//       console.log(freq1);
//     } else {
//       return false;
//     }
//   }
//   let sum = 0;
//   for (let value in freq1.values) {
//     sum += value;
//   }
//   if (sum === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// //Test
// console.log(matchAry([1, 1, 1], [1, 1]));
// console.log(matchAry([1, 2, 3], [4, 9, 1]));
// console.log(matchAry([1, 2, 3], [4, 9, 2]));
// console.log(matchAry([2, 2, 2], [4, 4, 4]));




//***************************************************************
//                   Anagram
//***************************************************************
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   for (let index in str1) {
//     if (str1[index] !== str2[str2.length - index - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isAnagram("aab", "baa"));
// console.log(isAnagram("ab", "baa"));
// console.log(isAnagram("abb", "baa"));
// console.log(isAnagram("", ""));
// console.log(isAnagram(" ", " "));
// console.log(isAnagram("anagram", "margana"));




//***************************************************************
//                   Multiple Pointers
//***************************************************************
//EXAMPLE 1
//given sorted array, find the two number sums to zero, use two pointers
//have one pointer start from the beginning, point to the smallest number
// have another pointer start from thte end, point to the largest number
// if sum > 0, move end pointer to the left
// if sum < 0, move end pointer to the right
// function findSumZero(ary) {
//   let left = 0;
//   let right = ary.length - 1;
//   let sum = 0;
//   while (left < right) {
//     sum = ary[left] + ary[right];
//     if (sum > 0) {
//       right--;
//     } else if (sum < 0) {
//       left++;
//     } else {
//       return [ary[left], ary[right]];
//     }
//   }
//   return undefined;
// }
// console.log(findSumZero([-2, -1, 0, 10, 20]));



//EXAMPLE2
//CountUniqueValues
// how many numbers appeared in a sorted array
function countUniqueValues(ary) {

  let large = 1;
  let smallNumber = ary[0];
  let count = 1;
  if (ary.length === 0) {
    return 0;
  }
  while (large <= ary.length - 1) {
    if (smallNumber !== ary[large]) {
      count++;
      smallNumber = ary[large];
      large++;
    } else {
      large++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 2, 2, 2, 2, 2, 3, 4, 5]));