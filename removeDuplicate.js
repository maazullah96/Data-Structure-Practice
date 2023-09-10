/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0;
  for (let right = 1; right < nums.length; right++) {
    if (nums[left] != nums[right]) {
      left += 1;
      nums[left] = nums[right];
    }
  }
  for (let i = left + 1; i < nums.length; i++) {
    nums[i] = "_";
  }
  nums
//   return left;
};

nums = [1, 1, 2];

removeDuplicates(nums)