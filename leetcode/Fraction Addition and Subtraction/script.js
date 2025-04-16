function findDivisor(x, y) {
  return y === 0 ? x : findDivisor(y, x % y)
}

function formFraction(str) {
  return str.split('/').map(n => Number(n))
}

var fractionAddition = function(expression) {
  let startSign = expression.startsWith('-') ? -1 : 1
  expression = startSign < 0 ? expression.slice(1) : expression

  const operations = [], fractions = []
  let fraction = ''

  for (let i = expression.length - 1; i >= 0; i--) {
    const char = expression[i]
    if (char === '+' || char === '-') {
      fractions.push(formFraction(fraction))
      operations.push(char)
      fraction = ''
    } else fraction = char + fraction
  }

  fractions.push(formFraction(fraction))

  if (startSign < 0) fractions.at(-1)[0] *= -1

  while (operations.length) {
    const operation = operations.pop()
    const firstFraction = fractions.pop(), secondFraction = fractions.pop()
    const denominator = firstFraction[1] * secondFraction[1]
    const numerator1 = firstFraction[0] * secondFraction[1], numerator2 = secondFraction[0] * firstFraction[1]

    const numerator = operation === '+' ? numerator1 + numerator2 : numerator1 - numerator2
    const divisor = findDivisor(Math.abs(numerator), denominator)
    fractions.push([numerator / divisor, denominator / divisor])
  }

  return fractions[0].join('/')
}