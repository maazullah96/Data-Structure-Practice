// console.log(Math.max(1, 5))

// facebook = 'localhost'
// facebook = ''
// console.log(facebook || '/')

// const array = [{ test1: 'name' }, { test2: 'maaz' }, -1, -2]

// const temp = [1, 2, 3, 4, 5]

// const set = new Set(['a', 'b'])
// console.log(temp)
// temp.pop()
// temp

// temp.s

// s = { a: 1, b: 2, c: '3' }
// s
// console.log(s)

// console.log(s['a'])

// const k1 = { fruit: '🥝' }
// const k2 = { fruit: '🥝' }

// console.log(Object.keys(k1))
// console.log(Object.keys(k2))
// //

// if (Object.keys(k1) === Object.keys(k2)) {
//   console.log('k1 <==> k2')
// } else {
//   console.log('k1 <==> k2')
// }

// console.log(Object.keys(k2))

console.log(new Promise(() => {}))

var isAcronym = function (words, s) {
  words, s
  if (words.length != s.length) {
    return false
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] !== s[i]) {
      return false
    }
  }
  return true
}
;(words = ['alice', 'bob', 'charlie']), (s = 'abc')

isAcronym(words, s)

// const colorPalette = ['🔴', '🟢', '🔵', '🟠', '🟣'];

// const selectedColors = colorPalette.slice();

// selectedColors[0]='🟢'

// console.log(colorPalette);

const colors = ['🟥', '🟦', '🟩', '🟨', '🟧']

// Removing colors using splice
const removedColors = colors.splice(1, 2) // Remove 2 colors starting from index 1
console.log(removedColors) // Output: ['🟦', '🟩']
console.log(colors) // Output: ['🟥', '🟨', '🟧']

// Adding colors using splice
colors.splice(1, 0, '🟪', '🟫') // Insert '🟪' and '🟫' at index 1 (no colors removed)
console.log(colors) // Output: ['🟥', '🟪', '🟫', '🟨', '🟧']

// Replacing colors using splice
colors.splice(3, 1, '🟦') // Replace colors at index 3 with '🟦'
console.log(colors) // Output: ['🟥', '🟪', '🟫', '🟦', '🟧']

const colors = ['🟥', '🟦', '🟩', '🟨', '🟧']

// Slicing colors
const slicedColors = colors.slice(1, 4) // Extract colors from index 1 (inclusive) to 4 (exclusive)
console.log(slicedColors) // Output: ['🟦', '🟩', '🟨']

// Slicing without end index
const partialColors = colors.slice(2) // Extract colors from index 2 to the end
console.log(partialColors) // Output: ['🟩', '🟨', '🟧']

// Original array remains unchanged
console.log(colors) // Output: ['🟥', '🟦', '🟩', '🟨', '🟧']
