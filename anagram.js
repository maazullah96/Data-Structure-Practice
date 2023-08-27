/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  console.log(s)
  console.log(p)
  const charFreq = {}
  charFreq
  for (let i = 0; i < p.length; i++) {
    console.log(p)
    let char = p[i]
    charFreq[char] = charFreq[char] + 1 || 1
    charFreq
  }
  let winStart = 0
  let matched = 0
  let result = []
  for (let winEnd = 0; winEnd < s.length; winEnd++) {
    let rightChar = s[winEnd]
    rightChar
    if (rightChar in charFreq) {
      charFreq[rightChar] -= 1
      if (charFreq[rightChar] === 0) {
        matched += 1
      }
    }
    if (matched === Object.keys(charFreq).length) {
      let chars = s.substring(winStart, winEnd + 1)
      console.log(chars)
      result.push(winStart)
    }
    if (winEnd - winStart + 1 === p.length) {
      let leftChar = s[winStart]
      leftChar
      let chars = s.substring(winStart, winEnd + 1)
      chars
      if (leftChar in charFreq) {
        if (charFreq[leftChar] === 0) {
          matched -= 1
        }
        charFreq
        charFreq[leftChar] += 1
      }
      winStart += 1
    }
  }
  return result
}

const s = 'cbaebabacd'
const p = 'abc'

let result = findAnagrams(s, p)
result
