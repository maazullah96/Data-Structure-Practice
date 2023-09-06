/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function (nums1, nums2) {
//   nums1 = [4, 1, 2]
//   nums2 = [1, 3, 4, 2]
//   let result = []
//   for (let i = 0; i < nums1.length; i++) {
//     const num = nums1[i]
//     console.log(num)
//     let index = nums2.indexOf(num)
//     console.log(index)
//     let nextFound = false
//     for (j = index + 1; j < nums2.length; j++) {
//       if (nums2[j] > num) {
//         result.push(nums2[j])
//         nextFound = true
//         break
//       }
//     }
//     if (nextFound == false) {
//       result.push(-1)
//     }
//     console.log(result)
//   }
//   return result
// }

var nextGreaterElement = (nums1,nums2)=>{
  let stack = []
  const map = new Map()
  for (let index = 0; index < nums2.length; index++) {
    let element = nums2[index];
    while(stack.length>0 && stack[stack.length-1] < element){
        console.log(element, stack[stack.length - 1]);
        map.set(stack.pop(),element)
    }
    stack.push(element)
  }
  for (let index = 0; index < nums1.length; index++) {
    const element = nums1[index];
    nums1[index] = map.has(element) ? map.get(element): -1
      console.log(nums1);
    }
    
}

// const nextGreaterElement = (nums2)=>{
//   let stack = []
//   for (let index = 0; index < nums2.length; index++) {
//     const element = nums2[index];
//     console.log(element)
//     console.log(stack[stack.length-1]);

//       while (stack.length > 0 && stack[stack.length - 1] > element ) {
//         console.log(stack);
//         stack.pop();
//       }
//       stack.push(element);
    
//   }
//   stack
// }

let nums1 = [4,1,2]
let nums2 = [1,3,4,2]
// let test = nextGreaterElement(nums2);

let test = nextGreaterElement(nums1, nums2)
console.log(test)

// (-1, 3, -1)