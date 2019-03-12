// solve some problems, 
//by storing the subproblem's answer


//1. Overlapping Subproblems
//Ex: fibonacci sequence, 2 digent sum to get the next value
//a smaller problem is calculated multiple times

//2. Optimal Substracture
// any optimal subproblem's answer would add up to the optimal answer to over all problem
// the shortest path is 
// vs the longest path is not 

//solve each question only once and store the answer
function dpFibonacci(n, memo = []) { //carry an array of stored answers
  //store answer in this array
  if (meno[n] !== undefined) return memo[n]; //check if we already caltulated this
  if (n <= 2) return 1;
  var recursive = dpFibonacci(n - 1, memo) + dpFibonacci(n - 2, memo);
  memo[n] = recursive; //store calculated value
  return recursive;
}