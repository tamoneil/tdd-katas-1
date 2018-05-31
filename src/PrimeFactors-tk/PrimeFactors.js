const generate = (input) => {
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
        return;
      }
    }
  });
  console.log('result', result);
  return result;
};

module.exports = {
  generate
};
