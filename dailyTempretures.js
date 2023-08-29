/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  console.log(temperatures)
  const queue = []
  for (let i = 0; i < temperatures.length; i++) {
    console.log(temperatures[i])
    while (queue.length > 0 && queue[queue.length - 1] > temperatures[i]) {
      console.log(temperatures[i])
      console.log(queue[queue.length - 1])
      queue.pop()
    }
    queue.push(temperatures[i])

    console.log(queue)
  }
}

temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
Output: [1, 1, 4, 2, 1, 1, 0, 0]

dailyTemperatures(temperatures)
