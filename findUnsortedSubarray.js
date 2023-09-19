/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    console.log(nums)
    let stack = []
    for (let i=0;i< nums.length;i++){
        let element = nums[i]
        element
        console.log(element)
        while(stack.length>0 && stack[stack.length-1] < element ){
            console.log(stack)
            stack.pop()
        }
        stack.push(element)
    }
};

let nums = [2, 6, 4, 8, 10, 9, 15];
findUnsortedSubarray(nums)