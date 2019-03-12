// if clicked on a 0, for all connected 0 field, change value to -2
//use Breadth first search saves more space O(n+m) instead of O(n*m)

//set up a queue, store the position we wanna check, first in first out
//use forloop to check surrounding cells of the element in the queue, 
//when ever see a zero, we change to -2, and push into the queue to check its surrounding later
//shift out the value we already checked 

function click(field, rows, cols, click_i, click_j) {
  let to_check = [];

}