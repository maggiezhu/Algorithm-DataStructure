// for loop ES6
//Of gives the vlaue, in gives the index/key
for (var char of String) {}
for (var value of Array) {}
for (var index in Array) {}
for (var key in Object) {}


//spread syntax 
//Any argument in the argument list can use spread syntax and it can be used multiple times.
// Array
arr1 = [...arr1, ...arr2];
// Object
var clonedObj = {
  ...obj1
};
var mergedObj = {
  ...obj1,
  ...obj2
};
Array.includes(element); //return true of false


// String Methods:
string.toLowerCase();
string.includes("");
string.substring(beginning, endNotIncluded);

// Array Methods:
Array.splice(index, numberofElement_toReplace, replace_with) //replace
Array.splice(index, numberofElement_toRemove)
Array.slice([begin, [end); //make another copy of the array without changing the original one
      //Copy array:
      Array.slice()
      Array = [...Array]

      Array.shift() // pop element form beginning of array
      Array.unshift() // add elements to the beginning and return the new length
      Array.pop() //pop from the end of array
      Array.push() // add to the end and return length

      //Object Methods:
      const object2 = Object.assign(object1, {
        c: 4,
        d: 5
      });
      // the later part will overwrite the orevious part 

      // Two ways to create an object:
      obj = {
        key: value
      };
      obj = new Object();


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