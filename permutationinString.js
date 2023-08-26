const checkInclusion = (s1, s2) => {
  console.log(s1, s2)
  const charFreq = {}
  for (let i = 0; i < s1.length; i++) {
    console.log(s1)
    let char = s1[i]
    charFreq[char] = charFreq[char] + 1 || 1
  }
  charFreq
  let winStart = 0
  let matched = 0
  for (let winEnd = 0; winEnd < s2.length; winEnd++) {
    console.log()
    let rightChar = s2[winEnd]
    console.log(rightChar)
    if (rightChar in charFreq) {
      charFreq[rightChar] -= 1
      if (charFreq[rightChar] === 0) {
        matched += 1
      }
    }
    rightChar
    console.log(charFreq)
    matched
    console.log(Object.keys(charFreq).length)
    if (matched === Object.keys(charFreq).length) {
      return true
    }
    console.log(winEnd - winStart + 1)
    console.log(s2.substring(winStart, winEnd + 1))
    if (winEnd - winStart + 1 === s1.length) {
      console.log(s1)
      leftChar = s2[winStart]
      leftChar
      charFreq
      if (leftChar in charFreq) {
        charFreq
        if (charFreq[leftChar] === 0) {
          matched -= 1
        }
        charFreq[leftChar] += 1
      }
      winStart += 1
    }
  }
  return false
}
// s1 = 'abc'
// s2 = 'ccccbbbbaaaa'
s1 = 'ab'
s2 = 'eidboaoo'
const tree = checkInclusion(s1, s2)
tree
