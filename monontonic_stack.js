const monotonic_stack = (arr) => {
  let stack = []
  console.log(arr)

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    let num = arr[i]
    console.log(num)
    

//     arr[i]
//     let j = arr.length - 1
//     // console.log(j)
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         stack.push(arr[j])
//         break
//       }
//     }
//     // for (let j = arr.length - 1; j > i; j--) {
//     //   stack.push(arr[j])
//     //   //   console.log(arr[i])
//     //   //   console.log(arr[j])
//     // }
    // stack.pop()
  }
}
// const arr = [3, 0, 0, 2, 4]
    // console.log(s)
let arr = [1, 4, 5, 3, 12, 10]
// 1 3 10 
monotonic_stack(arr)
