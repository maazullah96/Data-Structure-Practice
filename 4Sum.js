/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    console.log(nums)
    console.log(target)
    nums.sort((a,b)=>a-b)
    console.log(nums)
    let results =[]
    for(let i=0;i<nums.length-2;i++){
        if(nums[i] ==nums[i-1]){
            continue
        }
        for(let j=i+1;j<nums.length-1;j++){
        //      if(nums[j] ==nums[j-1]){
        //     continue
        // }
            j
            let left = j+1;
            let right = nums.length-1;
            let curr_sum = nums[i]+nums[j]
            console.log(left,right)
            while(left < right){
                let sum =  curr_sum + nums[left] + nums[right]
                console.log(left);
                console.log(right)

                console.log(sum)

                if(sum > target ){
                    right--
                }
                else if (sum < target) {
                  left += 1;
                }
                sum
                if (sum == target) {
                  results.push([nums[i], nums[j], nums[left], nums[right]]);
                  left+=1

                  while(nums[left]!= nums[left-1]){
                  left += 1;
                  }

                }
        }
    }
    
}
console.log(results)

};


let nums = [2, 2, 2, 2, 2];
let target = 8
fourSum(nums,target)