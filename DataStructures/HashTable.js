// key-> index -> store data there
/* Hash functions
    cryptographic has function
    a function take data abatrary size and out put a fix size
    given the same input the out put is always the same 
    ususally one way function
    
    prime numbers: 
    - used to help spreading out the keys
    */
function hash(key, arylength) {
  let total = 0;
  let wired_prime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key(i);
    let value = char.charCodeAt(0) - 96;
    total = (total * wired_prime + value) % arylength;
  }
  return total;
}

/*
Minimize Collision:
- Seperate Chaining: each index has nested array
- Linear Probing: look for the next empty slot if the given index is occupied 
*/