function minWindow(s, t) {
  const n = s.length
  let matched = 0
  let begin = 0,
    end = 0,
    head = 0

  // Set minimum length to len(string)+1. It cannot be greater than that
  let minLen = n + 1

  // Hashmap to hold character count in T
  const dic = {}
  for (const ch of t) {
    dic[ch] = (dic[ch] || 0) + 1
  }

  console.log(dic)

  // Iterate through the loop till we reach the end of string S
  while (end < n) {
    if (dic.hasOwnProperty(s[end])) {
      if (dic[s[end]] > 0) {
        matched++
      }
      dic[s[end]]--
    }
    end++

    // While matched is the length of t (it means we have all characters between begin and end)
    while (matched === t.length) {
      if (end - begin < minLen) {
        minLen = end - begin
        head = begin
      }

      // If character at begin index is present in T, then increment its count in hashmap
      if (dic.hasOwnProperty(s[begin])) {
        dic[s[begin]]++
        if (dic[s[begin]] > 0) {
          matched--
        }
      }
      begin++
    }
  }

  // Calculate the min string
  if (minLen === n + 1) {
    return ''
  }
  return s.slice(head, head + minLen)
}

// Example usage
const s = 'ABDDDDD'
const t = 'ABCD'
const result = minWindow(s, t)
console.log(result) // Output: "BANC"
