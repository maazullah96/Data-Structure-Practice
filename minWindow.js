/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  console.log(s)
  console.log(t)
  let charFreq = {}
  for (let i = 0; i < t.length; i++) {
    console.log(t[i])
    charFreq[t[i]] = charFreq[t[i]] + 1 || 1
    charFreq
  }
  let minLen = s.length - 1
  minLen
  let matched = 0
  let winStart = 0
  //   let winEnd = 0
  for (let winEnd = 0; winEnd < s.length; winEnd++) {
    char = s[winEnd]

    if (char in charFreq) {
      charFreq[char] -= 1
      charFreq
      if (charFreq[char] == 0) {
        matched += 1
      }
    }
    charFreq
    // while (matched == Object.keys(charFreq).length) {
    //   console.log(matched)

    //     if (winEnd - winStart + 1 < minLen) {
    //       console.log(s.substring(winStart, winEnd + 1))
    //     }
    // }
    // console.log(matched)
  }
}

let s = 'ADOBECODEBANC'
let t = 'ABC'
minWindow(s, t)
