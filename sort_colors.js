/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const counts =[0,0,0]

    if(nums.length==0 ){
        return
    }

    for (let num of nums){
        counts[num]+=1
    }
    counts
    let start = 0
    for(let i=0;i<counts.length;i++){
        let count = counts[i]
        console.log(count)
        let j = start
        for(;j<start+count;j++){
            nums[j] = i
        }
        start= j
        
    }
    return nums
};


let nums = [2, 0, 2, 1, 1, 0];
let Output =  [0, 0, 1, 1, 2, 2];

sortColors(nums)