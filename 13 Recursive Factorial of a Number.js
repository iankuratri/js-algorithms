/**
 
Recursive Factorial of a Number

Problem - Give an integer 'n', find the factorial of that integer
The factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.
Factorial of zero is 1.

recursiveFactorial(4) = 4*3*2*1 = 24
recursiveFactorial(5) = 5*4*3*2*1 = 120

 */

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(4)); // 4*3*2*1 = 24
console.log(recursiveFactorial(5)); // 5*4*3*2*1 = 120

// Big-O = O(n) Linear Time Complexity
