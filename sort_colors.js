/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let map = {}
    console.log(nums)
for(let i=0;i<nums.length;i++){
    let num = nums[i]
    map[num] = map[num]+1 || 1
    console.log(map)
    map
}

start =0
for (let key of Object.keys(map)) {
  console.log(key, value); // 'a' 1, 'b' 2, 'c' 3
  let i = start
  for(i=start;i<start+value;i++){
    key
    nums[i] = key;
    console.log(map[key]);
  }
  i
  start =i
  start
}
nums

};


let nums = [2, 0, 2, 1, 1, 0];
let Output =  [0, 0, 1, 1, 2, 2];

sortColors(nums)