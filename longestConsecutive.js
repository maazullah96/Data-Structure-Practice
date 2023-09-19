/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    nums
    const map1 = new Map();
    let min = Math.min(...nums)
    min
    nums.forEach((obj) => {
      map1.set(obj, obj-1);
    });
    if(map1.size === 1){
        return 1
    }
    let set = new Set()
    for (let obj of map1){
        obj
        if (map1.has(obj[1])) {
            set.add(...obj);
          if(obj[1]==min){
            set.add(obj[1])

          }
        }
        set
    }
    return set.size    
};

const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
nums
const res = longestConsecutive(nums)

nums.sort((a,b)=>a-b)
nums