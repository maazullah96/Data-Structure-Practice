
class Queue {
  // or enqueue, adding element n to the end of the line
  push(n) {}

  // or dequeue, remove the leader element
  pop() {}
}

class MontonicQueue{
  push(n){

  }
  pop(n){

  }
  max(){

  }
}

const maxSlidingWindow = (nums, k) => {
  let winStart = 0;
  let window = []
  for (let winEnd = 0; winEnd < nums.length; winEnd++) {
    const element = nums[winEnd];
    element
    if (winEnd - winStart + 1 == k) {
    }
  }
};
// nums = [1, 3, -1, -3, 5, 3, 6, 7]
// k = 3
let nums = [1, -1]
let k = 1

nums = [1, 3, -1, -3, 5, 3, 6, 7]
k = 3
const result = maxSlidingWindow(nums, k)
result





