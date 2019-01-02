// The Call Stack:
// when a function is called, it is pushed to the top of the call stack
// when JS see return key word, it pop (from the top) from the call stack 

// Base Case (if + return ) 
// Different input for the function everytime 
// What to return 

/*********************************************
 *        // Factorial operator 
 *********************************************/

// function factorial(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }

// console.log(factorial(3));



/*********************************************
 *        //Helper Method Recursion 
 *********************************************/
// have recursive function inside of an outer function 

// function collectOddValues(arr) {
//   let result = [];

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return;
//     }
//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }
//     helper(helperInput.slice(1));
//   }
//   helper(arr);
//   return result;
// }
// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 7]));


//Pure Recursion 
function collectOddValues(arr) {
  let result = [];
  if (arr.length === 0) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(collectOddValues(arr.slice(1)));
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 7]));