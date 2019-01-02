// for loop ES6
//Of gives the vlaue, in gives the index/key
for (var char of String) {}
for (var value of Array) {}
for (var index in Array) {}
for (var key in Object) {}


// String Methods:
string.toLowerCase();

// Array Methods:
Array.splice(index, numberofElement_toReplace, replace_with) //replace
Array.splice(index, numberofElement_toRemove)
Array.slice([begin, [end); //make another copy of the array without changing the original one

      //check if something is alphanumeric: 
      if (/[a-z0-9]/.test(char)) {} //SLOW
      "".charCodeAt(0); //to test if the number matchest to be alphanumeric, BETTER

      // character count, if exist in object add one to value, if not = 1
      obj["key"] = ++obj["key"] || 1
      //If used postfix, with operator after operand (for example, x++), then it returns the value before incrementing.
      //If used prefix with operator before operand (for example, ++x), then it returns the value after incrementing.

      //Math
      Math.pow(number, power);
      number ** power;