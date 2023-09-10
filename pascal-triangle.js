/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // let numRows = 5;
    let array =[];
    for(let i=0; i<numRows;i++){
        array.push(Array.from({ length: i + 1 }, (_) => 1));
        console.log(array);
    }
    for (let j = 2; j < array.length; j++) {
      console.log(array[j]);
      console.log(array[j]);
      for (let k = 1; k < array[j].length; k++) {
        // console.log();
        array[j][k] = array[j - 1][k - 1] + array[j-1][k];
        
        // const element = array[k];
        // console.log(element)
      }
    }
    return array;
    
};

let gen = generate(5)
gen