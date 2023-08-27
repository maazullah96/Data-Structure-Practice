function minWindow(s, t) {
  const n = s.length
  let counter = t.length
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

  counter

  // Iterate through the loop till we reach the end of string S
  while (end < n) {
    // If character in S is present in T
    // const rightChar = s[end]

    // if( )
    if (dic.hasOwnProperty(s[end])) {
      console.log(dic)
      console.log(s)
      console.log(s[end])
      console.log(dic[s[end]])
      console.log(dic)
      console.log(counter)
      if (dic[s[end]] > 0) {
        counter--
      }
      dic[s[end]]--
    }
    end++

    // While counter is zero (it means we have all characters between begin and end)
    while (counter === 0) {
      if (end - begin < minLen) {
        minLen = end - begin
        head = begin
      }

      // If character at begin index is present in T, then increment its count in hashmap
      if (dic.hasOwnProperty(s[begin])) {
        dic[s[begin]]++
        if (dic[s[begin]] > 0) {
          counter++
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
