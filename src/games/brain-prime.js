import engineOfGame from '../index.js';
import { createNum } from '../utils.js';

const isPrimeNum = () => {
  const num = createNum(0, 50);
  if (num === 0 || num === 1) {
    return 'no';
  }
  let d = 2;
  let result = 'yes';
  while (d * d < num) {
    if (num % d === 0) {
      result = 'no';
      break;
    } else {
      d += 1;
    }
  }
  if (d * d === num) {
    result = 'no';
  }
  console.log(`Question: ${num}`);
  return result;
};

const startPrimeGame = () => {
  engineOfGame('Answer "yes" if given number is prime. Otherwise answer "no".', isPrimeNum);
};
export default startPrimeGame;
