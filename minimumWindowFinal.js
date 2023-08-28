const minWindow = (s, t) => {
  console.log(s)
  console.log(t)
  let charFreq = {}
  for (let i = 0; i < t.length; i++) {
    charFreq[t[i]] = charFreq[t[i]] + 1 || 1
  }
  charFreq
  let minLen = Infinity
  let minStr = ''
  let winStart = 0
  let matched = 0

  for (let winEnd = 0; winEnd < s.length; winEnd++) {
    let rightChar = s[winEnd]
    rightChar
    charFreq
    if (rightChar in charFreq) {
      console.log(charFreq)
      rightChar
      charFreq[rightChar] -= 1
      matched

      if (charFreq[rightChar] >= 0) {
        matched += 1
      }

      matched
    }
    charFreq

    console.log(matched)

    while (matched === t.length) {
      console.log(matched)
      let windowLen = winEnd - winStart + 1

      if (minLen > windowLen) {
        minLen = windowLen
        minStr = s.substring(winStart, winEnd + 1)
        minStr
      }

      let leftChar = s[winStart]
      if (leftChar in charFreq) {
        if (charFreq[leftChar] == 0) {
          matched -= 1
        }
        charFreq[leftChar] += 1
      }
      winStart += 1
    }
  }
}

const s = 'aab'
t = 'aa'
result = minWindow(s, t)
