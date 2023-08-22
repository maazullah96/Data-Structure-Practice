function convertToSameCharacterString(s) {
  let charCount = {}
  let maxFreq = 0
  for (let i = 0; i < s.length; i++) {
    char = s[i]
    charCount[char] = charCount[char] + 1 || 1
    maxFreq = Math.max(charCount[char], maxFreq)
  }
  let changesNeeded = s.length - maxFreq
  return changesNeeded
}

// Example usage:
let inputString = 'abaad'
let minimumChanges = convertToSameCharacterString(inputString)
console.log(minimumChanges)
