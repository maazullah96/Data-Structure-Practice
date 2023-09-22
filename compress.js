/**
 * @param {character[]} chars
 * @return {number}
 */

var compress = function(chars) {
    let counts = 0 
    let noOf1s =0
    console.log(chars)
    for (let i =0;i< chars.length;i++){
        console.log(chars[i])
        let char = chars[i]
        if(i>0 && chars[i-1] != chars[i]){
            console.log(chars[i]);
            console.log(chars[i-1]);
            if(counts ===1){
                noOf1s+=1
            }
            else if(counts >0){
                console.log(chars[i-1]);
                console.log(counts);
            }
            counts =0
        }
        
        counts+=1
        console.log(chars);

    }
};


const chars = ["a", "a", "b", "b", "c", "c", "c"];
compress(chars)