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
}

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
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
}

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
}

function greet(name) {
  console.log(`Hello ${name}`);
}

function isOdd(n) {
  return n % 2 !== 0;
}

function oddsSmallerThan(n) {
  return Math.floor((n - 1) / 2);
}

function squareOrDouble(n) {
  if (isOdd(n)) {
    return n * n;
  } else {
    return n * 2;
  }
}

// Example calls
greet("Dawood");
console.log(isOdd(7));
console.log(isOdd(10));
console.log(oddsSmallerThan(7));
console.log(oddsSmallerThan(15));
console.log(squareOrDouble(16));
console.log(squareOrDouble(9));
