/**
 * @param number {int}
 * @returns {Array<int>} prime factors
 */
export function generate(number) {
  const factors = [];

  for (let divisor = 2; number > 1; divisor++) {
    for (; number % divisor === 0; number /= divisor) { //eslint-disable-line
      factors.push(divisor);
    }
  }

  return factors;
}
