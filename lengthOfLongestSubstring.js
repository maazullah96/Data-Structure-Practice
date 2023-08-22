var lengthOfLongestSubstring = function (s) {
  console.log(s)
  let winStart = 0
  let max = 0
  let hash_map = {}
  for (let winEnd = 0; winEnd < s.length; winEnd++) {
    let char = s[winEnd]
    hash_map[char] = hash_map[char] + 1 || 1

    while (hash_map[char] > 1) {
      hash_map[s[winStart]] -= 1
      winStart += 1
    }
    console.log(s.substring(winStart, winEnd + 1))

    max = Math.max(winEnd - winStart + 1, max)
    console.log(max)
  }
  console.log(max)
  return max
}

let s = 'abcabcbb'

lengthOfLongestSubstring(s)
