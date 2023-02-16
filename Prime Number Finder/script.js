function primeFinder(n) {
    // Write your code here
    const primeNumbers = [];
    let check = true;
    let j = 2;
    for (let i = 2; i <= n; i++) {
      while (check && j < n) {
        if (i > j && i % j === 0) {
          check = false;
        }
        j++;
      }
      if (check && i % 1 === 0) {
        primeNumbers.push(i);
      }
      check = true;
      j = 2;
    }
    return primeNumbers.length ? primeNumbers : 0;
  }
  
  console.log(primeFinder(20));