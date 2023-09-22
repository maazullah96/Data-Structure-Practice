/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {

    hash_map = {}
    let count =0
nums.forEach((num)=>{
    hash_map[num] = hash_map[num]+1 || 1
    hash_map
    console.log(num)
})
hash_map
k
for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    console.log(element);
    let sub = k - element 
    if(sub in hash_map ){
        console.log(sub,element)
        if(sub === element && hash_map[element]>2){
            hash_map[sub]-=2
            count+=1
        }
        else if(sub != element){
            hash_map[sub]--
            hash_map[element]--
            count += 1;
        }
    if(sub in hash_map && hash_map[sub]<=0){
        delete hash_map[sub]
    }
    if (element in hash_map && hash_map[element] <= 0) {
      delete hash_map[element];
    }
    }
}
console.log(Object.keys(hash_map).length);
console.log(count);
return count
};

let nums = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4];
let k = 2
// let nums = [3, 1, 3, 4, 3];
// let k = 6;
const res = maxOperations(nums,k)