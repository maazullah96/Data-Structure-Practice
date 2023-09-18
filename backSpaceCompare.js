/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
  const backspace = (string) => {
    let stack = [];
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (char === "#") {
        stack.pop();
        continue;
      }
      stack.push(char);
    }
    return stack.join(""); // Convert the stack to a string before returning
  };



  return backspace(s) === backspace(t); // Compare the processed strings and return the result
}

// Test cases
console.log(backspaceCompare("ab#c", "ad#c"));  // Output: true