/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  // let allowedChar = {}
  let set = new Set();
  for (const char in allowed) {
    set.add(allowed[char]);
  }
  set
  let count = 0;
  for (let index = 0; index < words.length; index++) {
    const elements = words[index].split("");
    elements
    let result = false; 
    for (let indexElement = 0; indexElement < elements.length; indexElement++) {
        const element = elements[indexElement];
        element
      if (!set.has(element)) {
        result = true
        break;
      }
        
    }
    if (!result) {
      count += 1;
    }
    }
count
  return count;
};


allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
countConsistentStrings(allowed,words)