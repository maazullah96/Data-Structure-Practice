/**
 * @param {number} n
 * @return {number[]}
 */

const countNoOfOneBits = (num) => {
  let count = 0
  while (num > 0) {
    console.log(num)
    if (num & 1) {
      count += 1
    }
    num = num >> 1
  }
  return count
}
var countBits = function (n) {
  console.log(n)
  counts = []
  for (let i = 0; i < n + 1; i++) {
    console.log(i)
    counts.push(countNoOfOneBits(i))
  }

    return counts
}

let n = 2
// console.log(n)
countBits(n)

