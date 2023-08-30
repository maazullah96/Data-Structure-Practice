var maxSlidingWindow = function (nums, k) {
  nums
  k
  const queue = []
  let winStart = 0
  const result = []
  for (let winEnd = 0; winEnd < nums.length; winEnd++) {
    console.log(nums[winEnd])
    queue

    while (queue[queue.length - 1] < nums[winEnd]) {
      queue.pop()
    }
    queue
    // while(queue[i])
    queue.push(nums[winEnd])
    if (winEnd - winStart + 1 === k) {
      winStart
      result.push(queue[0])
      winEnd
      queue
      winStart += 1
      console.log(winEnd - winStart + 1)
    }
  }
  result
}

// nums = [1, 3, -1, -3, 5, 3, 6, 7]
// k = 3
let nums = [1, -1]
let k = 1

nums = [1, 3, -1, -3, 5, 3, 6, 7]
k = 3
const result = maxSlidingWindow(nums, k)
result
