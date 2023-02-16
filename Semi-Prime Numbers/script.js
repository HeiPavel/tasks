const semiPrimeCount = (n) => {
    const primeNumbers = [];
    const semiPrimeNumbers = [];
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
            primeNumbers.forEach(number => {
              const semiPrimeNumber = number * i;
              console.log(semiPrimeNumbers);
              if (semiPrimeNumber < n) {
                if (semiPrimeNumber < semiPrimeNumbers[semiPrimeNumbers.length - 1]) {
                  const temp = semiPrimeNumbers[semiPrimeNumbers.length - 1];
                  semiPrimeNumbers[semiPrimeNumbers.length - 1] = semiPrimeNumber;
                  semiPrimeNumbers.push(temp);
                } else {
                  semiPrimeNumbers.push(semiPrimeNumber);
                }
              }
            });
        }
        check = true;
        j = 2;
      }
      /*for (let i = 0; i < primeNumbers.length - 1; i++) {
        const squarNumber = primeNumbers[i] * primeNumbers[i];
        const semiPrimeNumber = primeNumbers[i] * primeNumbers[i + 1];
        if (squarNumber < n) semiPrimeNumbers.push(squarNumber);
        if (semiPrimeNumber < n) semiPrimeNumbers.push(semiPrimeNumber);
      }*/
      /*primeNumbers.forEach((number, index) => {
        const caseOne = Math.pow(number, 2);
        if (caseOne < n) semiPrimeNumbers.push(caseOne);
        for (let i = index + 1; i < primeNumbers.length - 1; i++) {
            const caseTwo = number * primeNumbers[i];
            if (caseTwo < n) semiPrimeNumbers.push(caseTwo);
        }
      });*/
      //return semiPrimeNumbers.length ? semiPrimeNumbers.sort((a,b) => a-b) : 0;
      return semiPrimeNumbers.length ? semiPrimeNumbers : 0;
  }
  
  console.log(semiPrimeCount(70));