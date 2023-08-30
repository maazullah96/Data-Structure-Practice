// Function to solve Increasing
// Monotonic queue
function increasing_monotonic_queue(arr, n) {
  const q = []

  for (let i = 0; i < n; i++) {
    // If recently added element is greater than the current element

    while (q.length > 0 && q[q.length - 1] > arr[i]) {
      q.pop()
    }

    q.push(arr[i])
  }

  return q
}

// Driver code
const arr = [1, 2, 3, 4, 5, 6]
const n = arr.length
const q = increasing_monotonic_queue(arr, n)
q
// q.forEach((i) => {
//   process.stdout.write(i + ' ')
// })

// const newArr = [1,1,1,1,1,4,5]
const newArr = [1, 3, -1, -3, 5, 3, 6, 7]
console.log(newArr)

const queue = []

for (let i = 0; i < newArr.length; i++) {
  // console.log(queue[queue.length-1] )
  // console.log(newArr[i] )
  while (queue.length > 0 && queue[queue.length - 1] < newArr[i]) {
    queue.pop()
  }
  // queue
  queue.push(newArr[i])
  queue
}
