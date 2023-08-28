const minWindow = (s, t) => {
  console.log(s)
  console.log(t)

  tCharFreq = {}
  for (let i = 0; i < t.length; i++) {
    tCharFreq[t[i]] = tCharFreq[t[i]] + 1 || 1
  }
  tCharFreq

  let winStart = 0
  let minStr = ''
  let matched = 0
  let minLen = s.length + 1
  minLen
  for (let winEnd = 0; winEnd < s.length; winEnd++) {
    console.log(winEnd)
    let rightChar = s[winEnd]

    let subStr = s.substring(winStart, winEnd + 1)

    console.log(subStr)
    if (rightChar in tCharFreq) {
      tCharFreq[rightChar] -= 1
      console.log(tCharFreq)
      if (tCharFreq[rightChar] === 0) {
        matched += 1
      }
      console.log(subStr)
      t
      tCharFreq
    }
    while (matched === t.length) {
      console.log(matched)
      console.log(t.length)
      subStr = s.substring(winStart, winEnd + 1)
      console.log(subStr)
      if (minLen > winEnd - winStart + 1) {
        minLen = winEnd - winStart + 1
        minLen
        minStr = s.substring(winStart, winEnd + 1)
        minStr
      }
      let leftChar = s[winStart]
      if (leftChar in tCharFreq) {
        if (tCharFreq[leftChar] == 0) {
          matched--
        }
        tCharFreq[leftChar] += 1
      }
      winStart += 1
    }
    // matched
    // while (matched)
  }
}

// Example usage
const s = 'ADOBECODEBANC'
const t = 'ABC'
const result = minWindow(s, t)
console.log(result) // Output: "BANC"
