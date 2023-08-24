/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  let result = [] //for storing the all permutations
  let set = new Set() // for distinct values

  const solve = (nums, temp) => {
    if (temp.length === nums.length) {
      result.push(temp.slice())
    }
    for (let i = 0; i < nums.length; i++) {
      console.log(nums)
      if (!set.has(nums[i])) {
        temp.push(nums[i])
        set.add(nums[i])
        solve(nums, temp)
        set.delete(nums[i])
        temp.pop()
      }
    }
  }
  solve(nums, [])
  return result
}

nums = [1, 2, 3]
perms = permute(nums)
perms
