/**

Tower of Hanoi

The objective of the puzzle is to move the entire stack to the last rod, 
obeying the following rules:
• Only one disk may be moved at a time.
• Each move consists of taking the upper disk from one of the stacks and 
  placing it on top of another stack or on an empty rod. And lastly,
• No disk may be placed on top of a disk that is smaller.

*/

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    // Shift last disk from A to C
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  // Shift n-1 disks from A to B, using C (when required)
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

  // Shift n-1 disks from B to C, using A (when required)
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");

// Big-O = O(2^n) Recursive/Exponential Time Complexity
