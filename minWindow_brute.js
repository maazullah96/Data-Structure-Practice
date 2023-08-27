// var minWindow = function (s, t) {
//   console.log(s)
//   console.log(t)
//   let charFreqT = {}
//   for (let i = 0; i < t.length; i++) {
//     console.log(t[i])
//     charFreqT[t[i]] = charFreqT[t[i]] + 1 || 1
//     charFreqT
//   }
//   charFreqT
//   console.log(Object.entries(charFreqT).toString())
//   console.log(Object.entries(charFreqT).toString())
//   let winStart = 0
//   charFreqS = {}
//   for (let winEnd = 0; winEnd < s.length; winEnd++) {
//     // console.log(winEnd)
//     // console.log()
//     let rightChar = s[winEnd]
//     if (rightChar in charFreqT) {
//       charFreqS[rightChar] = charFreqS[rightChar] + 1 || 1
//     }
//     console.log(charFreqT)
//     console.log(charFreqS)

//     if (Object.keys(charFreqT).length == Object.keys(charFreqS).length) {
//       for (const key in charFreqS) {
//         console.log(key, person[key])
//       }
//     }
//     // if(charFreqT == charFreqS)

//     // console.log(winEnd)
//   }
// }

// let s = 'ADOBECODEBANC'
// let t = 'ABC'
// // minWindow(s, t)

function minWindow(s, t) {
  let minLength = Infinity
  console.log(s)
  console.log(t)
  let minWindow = ''

  for (let i = 0; i < s.length; i++) {
    for (let j = i + t.length; j <= s.length; j++) {
      const windowStr = s.substring(i, j)
      console.log(windowStr)
      if (containsAllChars(windowStr, t)) {
        if (windowStr.length < minLength) {
          minLength = windowStr.length
          minWindow = windowStr
        }
      }
    }
  }

  return minWindow
}

function containsAllChars(str, target) {
  const charCount = {}

  for (const char of target) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  for (const char of str) {
    if (charCount[char]) {
      charCount[char]--
    }
  }

  return Object.values(charCount).every((count) => count <= 0)
}

const containsAllCharacters = (str, CharFreq) => {
  for (const char of str) {
    if (CharFreq[char]) {
      CharFreq[char]--
    }
  }
  return Object.values(CharFreq).every((count) => count <= 0)
}
const minWindow_my = (s, t) => {
  let minLength = s.length - 1
  let minStr = ''
  console.log(minLength)
  tCharFreq = {}
  for (let i = 0; i < t.length; i++) {
    tCharFreq[t[i]] = tCharFreq[t[i]] + 1 || 1
  }
  console.log(tCharFreq)
  s, t
  console.log(s, t)
  for (let i = 0; i < s.length; i++) {
    console.log(i)
    for (let j = i + t.length; j <= s.length; j++) {
      chars = s.substring(i, j)
      console.log(chars)
      tCharFreq
      if (containsAllCharacters(chars, { ...tCharFreq })) {
        if (minLength > chars.length) {
          minLength = chars.length
          minStr = chars
        }
      }
    }
  }
  return minStr
}

// Example usage
const s = 'ADOBECODEBANC'
const t = 'ABC'
result = minWindow_my(s, t)
// const result = minWindow(s, t)
result
console.log(result) // Output: "BANC"
