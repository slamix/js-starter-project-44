import engineOfGames from '../index.js';
import { createNumFromRange } from '../utils.js';

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }
  let d = 2;
  while (d * d < num) {
    if (num % d === 0) {
      return false;
    }
    d += 1;
  }
  if (d * d === num) {
    return false;
  }
  return true;
};

const primeOrNotGame = () => {
  const num = createNumFromRange(0, 50);
  const question = num;
  let rightAnswer = 'no';
  if (isPrime(num)) {
    rightAnswer = 'yes';
  }
  return [rightAnswer, question];
};

const startPrimeOrNotGame = () => {
  engineOfGames('Answer "yes" if given number is prime. Otherwise answer "no".', primeOrNotGame);
};
export default startPrimeOrNotGame;
