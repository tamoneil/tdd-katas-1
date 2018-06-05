const getFactors = (input) => {
  console.log('our input', input);
  const primeNumbers = [2, 3, 5, 7, 11, 13];
  const result = [];
  let remainingValue = input;

  primeNumbers.forEach((prime) => {
    while (remainingValue > 1) {
      if (remainingValue % prime === 0) {
        result.push(prime);
        remainingValue /= prime;
      } else {
        console.log('remaining value - not prime number in our list', remainingValue);
        return;
      }
    }
  });
  console.log('result', result);
  return result;
};

const generator = (input) => {
  // Find previous prime number (just smaller than input)

  if (input < 2) {
    return 0;
  }
  return 3;
};

module.exports = {
  getFactors,
  generator
};
