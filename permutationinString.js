// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// var checkInclusion = function (s1, s2) {
//   console.log(s1, s2)
//   s2_freq = {}
//   let matched = 0
//   for (let i = 0; i < s2.length; i++) {
//     s2_freq[s2[i]] = s2_freq[s2[i]] + 1 || 1
//   }
//   let winStart=0;

//   s2_freq
//   for (let winEnd = 0; winEnd < s1.length; winEnd++) {
//     let char = s1[winEnd]
//     console.log(char)
//     if (char in s2_freq) {
//       console.log(char)
//       s2_freq[char] -= 1
//       if (s2_freq[char] == 0) {
//         console.log(s2_freq)
//         matched += 1
//       }
//     }
//     if (matched === Object.keys(s2_freq).length) {
//       return true
//     }
//     if(winEnd >= s2.length-1 ){
//       leftChar = s1[winStart]
//       leftChar
//       s2_freq
//       if(leftChar in s2_freq){
//         if(s2_freq[leftChar]==0){
//           matched-=1
//         }
//         s2_freq[leftChar]+=1
//       }
//     }
//   }
//   return false
// }

// s1 = 'oidbcf'
// Pattern = 'abc'
// const f = checkInclusion(s1, Pattern)
// f

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function (s1, s2) {
  let charFreq = {}
  for (let i = 0; i < s1.length; i++) {
    charFreq[s1[i]] = charFreq[s1[i]] + 1 || 1
  }
  console.log(charFreq)
  let matched = 0
  let winEnd = 0
  let winStart = 0
  for (let winEnd = 0; winEnd < s2.length; winEnd++) {
    let char = s2[winEnd]
    console.log(char)
    if (char in charFreq) {
      charFreq[char] -= 1
      if (charFreq[char] == 0) {
        matched += 1
      }
    }
    if (matched == Object.keys(charFreq).length) {
      return true
    }
    if (winEnd >= s1.length - 1) {
      char = s2[winStart]
      console.log(s1)
      console.log(winStart)
      console.log(char)
      if (char in charFreq) {
        if (charFreq[char] == 0) {
          matched -= 1
        }
      }
      winStart += 1
    }
  }
  return false
}

// s1 = "ab", s2 = "eidbaooo"
// s1='ab',s2='aidpbaooo'
s1 = 'abc'
s2 = 'ccccbbbbaaaa'
const tree = checkInclusion(s1, s2)
tree
