import engineOfGame from '../index.js';
import { createNum } from '../utils.js';

const isPrimeNum = () => {
  const number = createNum(0, 100);
  if (number === 0 || number === 1) {
    return 'no';
  }
  let d = 2;
  let result = 'yes';
  while (d * d < number) {
    if (number % d === 0) {
      result = 'no';
      break;
    } else {
      d += 1;
    }
  }
  if (d * d === number) {
    result = 'no';
  }
  console.log(`Question: ${number}`);
  return result;
};

const startPrimeGame = () => {
  engineOfGame('Answer "yes" if given number is prime. Otherwise answer "no".', isPrimeNum);
};
export default startPrimeGame;
