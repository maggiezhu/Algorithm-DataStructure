/*https://codeburst.io/functional-programming-in-javascript-e57e7e28c0e5

1. describe what to accomplish not the actural operations 
   ex: use map() instead of for loop to operate on an array

2. Pure function: gives same output with the same input
    ex: Math.random() is not, Math.min() is

3. Side Effects: hard to debug 
    Function or expression is said to have a side effect if it modifies some state of the program, which is outside of its own scope or has an observable interaction with its calling functions or the outside program besides returning a value.

4. Immutability:
    Immutabilityis important to make sure one function does not change the original data rather than should return new copy of the data after manipulation.


FUNCTIONS:
.map: do the operation to every single value
.reduce: reduce an array for one single value, based on given callback function
.filter: evaluate each element based on callback function
.find:
.every:
.some:
*/

/*
Advantages:
- Its pure function, provides confidence of not changing things outside of its scope.
- Its reduces the complexity, need not to worry about how it is doing it, focus will be only on what it is doing.
- Ease of testing, because it does not depend on state of the application and result verification also will be easy.
- It makes the code more readable.
- Functional programming makes code easier to understand.
*/


process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";
var infractions = [{
    "plate": "ABCD 123",
    "date": "2014-12-24",
    "type": "speeding"
  },
  {
    "plate": "ABCD I23",
    "date": "2015-02-15",
    "type": "failure.to.stop.at.stop.sign"
  },
  {
    "plate": "ABCD 123",
    "date": "2016-04-14",
    "type": "operating.mobile.device"
  }
];

process.stdin.on('data', function (text) {
  input += text;
});

process.stdin.on('end', function () {
  //do your processing here.
  const result = getMostRecentInfractionForVehicle(input);
  console.log(JSON.stringify(result));
});
//Edit above at your own risk


//TODO: Refactor this function to use functional programming paradigms
function getMostRecentInfractionForVehicle(plate) {
  if (infractionsByCar.length > 0) {
    const sorted = infractionsByCar.sort((a, b) => {
      if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
        return -1;
      } else if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
        return 1;
      } else {
        return 0;
      }
    });
    return sorted[0];
  } else {
    return undefined;
  }



  let result = infractions.filter((infraction) => {
      return infraction.plate === plate;
    })
    .sort((a, b) => {
      if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
        return -1;
      } else if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
        return 1;
      } else {
        return 0;
      }
    });
  return result[0];
}