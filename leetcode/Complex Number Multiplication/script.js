const complexNumberMultiply = (num1, num2) => {
    const n1 = num1.slice(0, num1.indexOf('+')), n2 = num1.slice(num1.indexOf('+') + 1, num1.indexOf('i'))
    const n3 = num2.slice(0, num2.indexOf('+')), n4 = num2.slice(num2.indexOf('+') + 1, num2.indexOf('i'))
  
    return `${n1 * n3 + (n2 * n4) * -1}+${n1 * n4 + n2 * n3}i`
}