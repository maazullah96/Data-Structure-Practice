/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    console.log(nums)
    nums.sort((a,b)=>(a-b))
    let results = []
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(nums[index-1] ==nums[index]){
            continue;
        }
        console.log(element)
        let left =index+1
        let right = nums.length-1
        console.log(left)
        console.log(right)
        while(left < right){
            console.log(`${nums[left]},${nums[right]},${element}`);
            let res = nums[left]+nums[right]+element
           
             if (res > 0){
                right-=1
            }else if(res<0){
                left+=1
            }
            else if(res ===0){
                let arr = [nums[left], nums[right], element];
                console.log(arr)
                console.log(`indexess = ${left},${right},${index}`);
                results.push(arr);
                left+=1
                while(nums[left-1] == nums[left]){
                    left+=1
                }
               
            }
        }
    }
    console.log(results);
    return results
};


// nums = [-1, 0, 1, 2, -1, -4];
// nums = [0, 0, 0, 0];
nums = [-1, 0, 1, 0];
threeSum(nums)