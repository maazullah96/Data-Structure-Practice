function minWindow(s, t) {
  console.log(s)
  console.log(t)
  charFreq = {}
  for (let i = 0; i < t.length; i++) {
    charFreq[t[i]] = charFreq[t[i]] + 1 || 1
  }
  charFreq

  let winStart = 0
  let winEnd = 0
  let matched = 0
  let minLen = s.length + 1
  for (let winEnd = 0; winEnd < s.length; winEnd++) {
    console.log()
    let rightChar = s[winEnd]
    rightChar
    if (rightChar in charFreq) {
      charFreq[rightChar]--
      if (charFreq[rightChar] == 0) {
        matched += 1
        console.log(charFreq)
      }
    }
    matched
    if (matched === t.length) {
      console.log(matched)
      console.log(t.length)
    }

    if (winEnd - winStart + 1 < minLen) {
      // winStart+=1
      let leftChar = charFreq[winStart]
      if (leftChar in charFreq) {
        if (charFreq[leftChar] === 0) {
          matched -= 1
        }
        charFreq[leftChar] += 1
        winStart += 1
      }
    }
  }
}

// Example usage
const s = 'ADOBECODEBANC'
const t = 'ABC'
const result = minWindow(s, t)
console.log(result) // Output: "BANC"
