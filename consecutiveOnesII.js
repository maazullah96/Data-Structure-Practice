const findMaxConsecutiveOnes = (nums) => {
  // write your code here
  k = 1
  console.log(nums)
  let zeroCount = 0
  let winStart = 0
  let maxCount = 0
  for (let winEnd = 0; winEnd < nums.length; winEnd++) {
    console.log(winEnd)

    let num = nums[winEnd]
    zeroCount += num == 0 ? 1 : 0
    console.log(zeroCount)
    if (zeroCount > k) {
      if (nums[winStart] == 0) {
        zeroCount -= 1
      }
      winStart += 1
    }

    maxCount = Math.max(winEnd - winStart + 1, maxCount)
  }
  console.log(maxCount)
}

// nums = [1, 0, 1, 1, 0]
nums = [1, 0, 1, 0, 1]
const Ones = findMaxConsecutiveOnes(nums)
