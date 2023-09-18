/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    console.log(nums)
    

    const map1 = new Map();

    nums.forEach((obj) => {
      map1.set(obj, obj-1);
    });

    map1
    
};

const nums = [100, 4, 200, 1, 3, 2];  
nums
const res = longestConsecutive(nums)