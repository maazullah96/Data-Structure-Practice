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
      for (let k = 1; k < array[j].length-1; k++) {
        array[j][k] = array[j - 1][k - 1] + array[j-1][k];
        array
      }
    }
    
    array;
};

let gen = generate(5)
gen