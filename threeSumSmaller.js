const threeSumSmaller = (nums,target)=>{
    let count = 0
    
    for(let index =0; index< nums.length;index++){
      nums.sort((a,b)=>a-b)
      let left = index+1
      let right = nums.length-1
      
      while (left < right){
        let sum = nums[left]+nums[index]+ nums[right]
        if(sum <target){
          count += right - left;
          left+=1
        }
        else{
          right-=1
        }
        
      }
    }
    count
    console.log(count);
}

let nums = [5, 1, 3, 4, 7];
let target = 12;
threeSumSmaller(nums,target)