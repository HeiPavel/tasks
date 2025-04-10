var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false

  const letterCodes = {}

  for (let i = 1; i < 27; i++) {
    const charCode = i + 96
    letterCodes[String.fromCharCode(charCode)] = i + Math.floor(charCode ** 3 / (i * 2))
  }

  let baseHash = 0, floatHash = 0
  for (const char of s1) {
    baseHash += letterCodes[char]
  }
  
  for (let i = 0; i < s2.length; i++) {
    floatHash += i < s1.length ? letterCodes[s2[i]] : (letterCodes[s2[i]] - letterCodes[s2[i - s1.length]])
    if (floatHash === baseHash) return true
  }

  return false
}