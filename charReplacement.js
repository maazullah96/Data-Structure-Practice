/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  console.log(s, k)
  let winStart = 0
  let max = 0
  let hash_map = {}
  let maxFreq = 0
  for (let winEnd = 0; winEnd < s.length; winEnd++) {
    let char = s[winEnd]
    hash_map[char] = hash_map[char] + 1 || 1
    maxFreq = Math.max(hash_map[char], maxFreq)
    let window = winEnd - winStart + 1
    let remaining = window - maxFreq
    if (remaining > k) {
      hash_map[s[winStart]] -= 1
      winStart += 1
    }
    max = Math.max(winEnd - winStart + 1, max)
  }
  return max
}

let s = 'AAAAABBB'
let k = 2
characterReplacement(s, k)
// test = characterReplacement(s, k)
