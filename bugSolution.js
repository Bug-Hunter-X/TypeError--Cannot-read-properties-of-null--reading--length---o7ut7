function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined cases
  }
  if (typeof x === 'object' && 'length' in x) {
    return x.length; // Access length only if x is an object with length property
  } else {
    return -1; // Or throw an error, depending on your error handling strategy
  }
}