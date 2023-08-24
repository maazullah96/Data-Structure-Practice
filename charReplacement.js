/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  console.log(s, k)
  let winStart = 0
  let max = 0
  let hashMap = {}
  let maxFreq = 0
  for (let winEnd = 0; winEnd < s.length; winEnd++) {
    let char = s[winEnd]
    hashMap[char] = hashMap[char] + 1 || 1
    hashMap
    maxFreq = Math.max(hashMap[char], maxFreq)
    maxFreq
    let window = winEnd - winStart + 1
    let remaining = window - maxFreq
    remaining
    if (remaining > k) {
      hashMap[s[winStart]] -= 1
      winStart += 1
    }
    max = Math.max(winEnd - winStart + 1, max)
    max
  }
  return max
}

let s = 'AAAAABBB'
let k = 2
characterReplacement(s, k)
// test = characterReplacement(s, k)
