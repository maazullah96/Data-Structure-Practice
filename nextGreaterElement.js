/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  nums1 = [4, 1, 2]
  nums2 = [1, 3, 4, 2]
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]
    console.log(num)
    let index = nums2.indexOf(num)
    console.log(index)
    let nextFound = false
    for (j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > num) {
        result.push(nums2[j])
        nextFound = true
        break
      }
    }
    if (nextFound == false) {
      result.push(-1)
    }
    console.log(result)
  }
  return result
}
var nextGreaterElement = function (nums1, nums2) {
  map = {}
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = i
  }
  map
  let result = Array.from({ length: nums1.length }, (_, i) => -1)
  //   result
  console.log(map)
  nge ={}
  console.log(result);
  stack = []
  for (let i = 0; i < nums2.length; i++) {

    const num = nums2[i]
    num
    while (stack.length > 0 && stack[stack.length-1] < num){
      stack
      nge[stack.pop()] = num
      // stack.pop()
    }
    stack.push(num)
    console.log(stack)
    nge

    nge
    let index =0;
    
    result
    // if (num in map) {
    //   let index= map[num];
    //   console.log(index);
    //   console.log(result[index]); 
      
  //     let nextFound = false
  //     for (let j = i + 1; j < nums2.length; j++) {
  //       if (nums2[j] > num) {
  //         result[i] = nums2[j]
  //         break
  //       }
  //     }
    // }
  }
  result
  stack
}

let nums1 = [4,1,2]
let nums2 = [1,3,4,2]

let test = nextGreaterElement(nums1, nums2)
console.log(test)

(-1, 3, -1)