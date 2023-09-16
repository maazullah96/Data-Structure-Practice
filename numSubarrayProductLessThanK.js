/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count =0
    let result = []
    for(let i =0; i < nums.length;i++){
        console.log(nums[i])
        result.push([])
        let product = nums[i] 
        let j=i+1
        while( product < k){
            result[i].push(nums.slice(i,j))
            console.log(product)
            product *=nums[j]
            count+=1
            j++
        }
    }
    result
    count
    return count
};

let nums = [10,5,2,6]
let k = 100
nums = [1,2,3]
k = 0
numSubarrayProductLessThanK(nums,k)

