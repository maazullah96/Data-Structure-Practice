/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a,b)=>a-b)
    nums
    console.log(nums)
    let closest_difference = Infinity
    let closest_sum = Infinity
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        console.log(element)
        let left = index+1
        let right = nums.length-1;
        console.log(left)
        console.log(right)
        while(left <right){
            let sum =nums[index]+ nums[left]+ nums[right]
            console.log(sum)
            diff = Math.abs(target - sum);
            console.log(diff);
            if(diff < closest_difference){
                closest_difference = diff
                closest_sum = sum
            }
            if (diff==0){
                return sum
            }
            sum
            if(sum >= target){
                left+=1
            }else{
                right-=1
            }  
        }
        }
        closest_sum
        return closest_sum;
};

// let nums = [-1,2,1,-4]
// let target = 1

let nums = [4,0,5,-5,3,3,0,-4,-5]
target = -2
threeSumClosest(nums,target)