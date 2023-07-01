/**

Quick Sort

Problem - Given an array of integers, sort the array.
const arr = [-6, 20, 8, -2, 4]
quickSort(arr) => Should return [-6, -2, 4, 8, 20]

Pseudocode

Identify the pivot element in the array
• Pick first element as pivot
• Pick last element as pivot (Our approach)
• Pick a random element as pivot
• Pick median as pivot

Put everything that's smaller than the pivot into a 'left' array 
and everything that's greater than the pivot into a 'right' array

Repeat the process for the individual 'left' 
and 'right' arrays till you have an array of length 1 which is sorted by definition

Repeatedly concatenate the left array, pivot 
and right array till one sorted array remains

*/

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const element = arr[i];

    if (element < pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]
