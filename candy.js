/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    console.log(ratings)
    let candies = Array.from({length:ratings.length},(x)=>1)
    candies
    for(let i=1;i<ratings.length;i++){
        console.log(ratings[i]);
        console.log(ratings[i-1]);
        if( ratings[i] >ratings[i-1] ){
            candies[i]+=1
        }
    }
    console.log(candies)
    for(let i =ratings.length-1-1;i>=0;i--){
        console.log(ratings[i+1]);
        console.log(ratings[i])
        console.log(candies[i+1])
        console.log(candies[i])
        console.log(`${ratings[i]} < ${ratings[i + 1]}`);
        console.log(`${candies[i + 1]} <= ${candies[i]}`);
        console.log(candies[i + 1] <= candies[i]);
        if (ratings[i] < ratings[i + 1] && candies[i + 1] <= candies[i]) {
          console.log(candies[i + 1]);
          console.log(candies[i]);
          candies[i] += 1;
        }
    }
    candies
};

let ratings = [1, 0, 2];
let result = 5
candy(ratings)