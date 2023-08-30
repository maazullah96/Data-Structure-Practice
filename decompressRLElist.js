var decompressRLElist = function (nums) {
  console.log(nums)
  const result = []
  for (let index = 0; index < nums.length; index += 2) {
    const freq = nums[index]
    const val = nums[index + 1]
    arr = Array.from({ length: freq }, (_, i) => val)
    console.log(arr)
    console.log(...arr)
    result.push(...arr)
  }
  return result
}

decompressRLElist(nums)
