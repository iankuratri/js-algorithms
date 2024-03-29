/** 

Recursive Fibonacci Sequence

Problem - Give a number 'n', find the nth element of the Fibonacci sequence
In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
The first two numbers in the sequence are 0 and 1. (0, 1, 1, 2, 3, 5, 8...)

recursiveFibonacci(0) = 0
recursiveFibonacci(1) = 1
recursiveFibonacci(6) = 8

*/

/**
 
Pseudocode

F(n) = F(n-1) + F(n-2)

F(0) = 0 and F(1) = 1

F(2) = F(1) + F(0)

F(2) = 1 + 0

F(2) = 1

 */

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

// Big-O = O(2^n) Recursive Time Complexity
