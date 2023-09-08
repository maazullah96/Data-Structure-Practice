/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // let numRows = 5;
    let arr =[];
    for(let i=0; i<numRows;i++){
        arr.push(Array.from({length:i+1},(_)=>1))
        console.log(arr);
    }
    for(let j=2; j<arr.length;j++){
        console.log(arr[j]);
        console.log(arr[j]);
    }
    
};

let gen = generate(5)
gen