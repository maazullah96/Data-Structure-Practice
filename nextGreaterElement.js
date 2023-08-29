/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1) {
  const result = []
  for (let i = 0; i < nums1.length; i++) {
    console.log(nums1[i])
    let found = false
    for (let j = i + 1; j < nums1.length; j++) {
      if (nums1[j] > nums1[i]) {
        result.push(nums1[j])
        found = true
        break
      }
    }
    if (found == false) {
      result.push(-1)
    }
  }
  result
}

const nums1 = [2, 1, 2, 4, 3]
let result = nextGreaterElement(nums1)
result
