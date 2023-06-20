/** 

Prime Number

Problem - Give a natural number 'n', determine if the number is prime or not

A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

isPrime(5) = true (1*5 or 5*1)
isPrime(4) = false (1*4 or 2*2 or 4*1)

*/

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let factorial = 2; factorial <= Math.sqrt(num); factorial++) {
    if (num % factorial === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(0)); // false, smaller than 2
console.log(isPrime(5)); // true (1*5 or 5*1)
console.log(isPrime(4)); // false (1*4 or 2*2 or 4*1)

// Big-O = O(sqrt(n))
