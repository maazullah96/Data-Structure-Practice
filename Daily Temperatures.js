/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = (temperatures)=>{
    const stack = []
    let res = Array.from({ length :temperatures.length},(x)=>0)
    res;
    for (let index = 0; index < temperatures.length; index++) {
        const element = temperatures[index];
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < element){
            let poppedIndex = stack.pop()
            poppedIndex
            res [poppedIndex] = index-poppedIndex
            res
        }
          stack.push(index);
        
    }

}


 temperatures = [73, 74, 75, 71, 69, 72, 76,73];

 dailyTemperatures(temperatures)
