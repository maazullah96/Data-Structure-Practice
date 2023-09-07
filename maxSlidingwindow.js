const maxSlidingWindow = (nums, k) => {
    let queue = []
    let winStart =0
    let result = []

    for(let winEnd =0; winEnd< nums.length;winEnd++){
      const num = nums[winEnd];
      console.log(queue)
      while (queue.length > 0 && num > nums[queue[queue.length - 1]]){
        queue.pop()
      }
      num
      // 
      // num
      // winStart
      while (queue[0] < winStart) {
        queue.shift()
      }
      
      queue.push(winEnd);
      
      if(winEnd-winStart+1 === k){
        result.push(nums[queue[0]]);
        result
        winStart+=1
      }
     
    }
    result
    return result
};

// nums = [1, 3, -1, -3,  5, 3, 6, 7];
// k = 3

let nums = [1, -1];
let k = 1

const result = maxSlidingWindow(nums, k)





