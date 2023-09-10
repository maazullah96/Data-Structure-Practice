
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    console.log(nums)    
    let left=0
    let right=nums.length-1
    let array = Array.from({ length:nums.length},(x)=>1);
    
    let lastElement = right;
    while(left <= right){
        let leftSq =nums[left] * nums[left]
        let rightSq =nums[right] * nums[right]
        if (leftSq >= rightSq) {
          console.log(left);
          array[lastElement] = leftSq;
          left += 1;
        } else if (rightSq > leftSq) {
          console.log(right);
          array[lastElement] = rightSq;
          right -= 1;
        }
        lastElement-=1
    }
    
    array

};



let nums = [-4, -1, 0, 3, 10];

sortedSquares(nums)