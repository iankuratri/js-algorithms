/**

Cartesian Product

Problem - Given two finite non-empty sets, find their Cartesian Product.

In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted AxB, 
is the set of all ordered pairs (a, b) where a is in A and b is in B

const A = [1, 2]
const B = [3, 4]

A x B = [ [1, 3], [1, 4], [2, 3], [2, 4] ]

const C = [1, 2]
const D = [3, 4, 5]

C x D = [ [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5] ]

*/

function cartesianProduct(setA, setB) {
  const result = [];

  for (const elementFromSetA of setA) {
    for (const elementFromSetB of setB) {
      result.push([elementFromSetA, elementFromSetB]);
    }
  }

  return result;
}

console.log(cartesianProduct([1, 2], [3, 4])); // [ [1, 3], [1, 4], [2, 3], [2, 4] ]
console.log(cartesianProduct([1, 2], [3, 4, 5])); // [ [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5] ]

// Big-O = O(mn)
