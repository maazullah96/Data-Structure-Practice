var findMaxConsecutiveOnes = function (nums) {
  console.log(nums)
  let maxCount = 0
  let count = 0
  for (let winEnd = 0; winEnd < nums.length; winEnd++) {
    if (nums[winEnd] == 1) {
      count += 1
    } else {
      count = 0
    }
    maxCount = Math.max(count, maxCount)
  }
  console.log(maxCount)
  return maxCount
}

nums = [1, 1, 0, 1, 1, 1]
findMaxConsecutiveOnes(nums)
