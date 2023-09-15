/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    console.log(nums);
    console.log(k);
    nums.sort((a,b)=>a-b)
    nums
    for(let i =0; i< nums.length;i++){
        console.log(nums[i]);
        let left =index+1
        let right = nums.length-1
        console.log(left)
        console.log(right)
        let product = nums[index]
        
        while(left<right){
            product = product * nums[left]*nums[right]
            product
            if(product> k){
                product = product/nums[right]
            }else{

            }
        }
        
    }

};

let nums = [10,5,2,6]
let k = 100
numSubarrayProductLessThanK(nums,k)

