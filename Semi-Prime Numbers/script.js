const semiPrimeCount = (n) => {
    const primeNumbers = [];
    const semiPrimeNumbers = [];
      let check = true;
      let j = 2;
      for (let i = 2; i <= n; i++) {
        while (check && j < i) {
          if (i % j === 0) {
            check = false;
          }
          j++;
        }
        if (check) {
          primeNumbers.push(i);
            primeNumbers.forEach(number => {
              const semiPrimeNumber = number * i;
              if (semiPrimeNumber < n) {
                semiPrimeNumbers.push(semiPrimeNumber);
              }
            });
        }
        check = true;
        j = 2;
        if (primeNumbers[primeNumbers.length - 1] * primeNumbers[0] >= n) break;
      }
      return semiPrimeNumbers.length ? semiPrimeNumbers.length : 0;
  }
  
  console.log(semiPrimeCount(10));