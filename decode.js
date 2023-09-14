/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const character = "a";
  let count = character.charCodeAt(0)
  let map =new Map()
  
  for(let i =0;i< key.length;i++){
      let val = key[i]
      if (val == " ") {
        continue
    }
      
    if(!map.has(val)){
        map.set(key[i], String.fromCharCode(count));
        count+=1
    }
  }
  let result =''
  for(let m =0;m<message.length;m++){
    let msg = message[m]
    if(msg ==' '){
        result+=' '
        continue
    }
     const mm = map.get(msg)
     result+=mm
  }
  return result
};


let key = "the quick brown fox jumps over the lazy dog"
let message = "vkbs bs t suepuv"

decodeMessage(key,message)