/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}
greet("Ghizlane");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n % 2 != 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isOdd(5));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
//  * e.g.
//  * oddsSmallerThan(7) -> 3
//  * oddsSmallerThan(15) -> 7
//  */
function oddsSmallerThan(n) {
  // Your code here

  let count = 0;
  // for (let i = n - 1; i > 0; i--) {
  //   if (isOdd(i)) {
  //     count++;
  //   }
  // }
  // return count;

  if (isOdd(n)) {
    count = (n - 1) / 2;
  }

  return count;
}
console.log(oddsSmallerThan(7));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (isOdd(n)) {
    return n * n;
  } else {
    return n * 2;
  }
}
let number = squareOrDouble(9);
console.log(number);
module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
