import engineOfGames from '../index.js';
import { createNumFromRange } from '../utils.js';

const findGcdGame = () => {
  let num1 = createNumFromRange(1, 50);
  let num2 = createNumFromRange(1, 50);
  const firstNum = num1;
  const secondNum = num2;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const question = `${firstNum} ${secondNum}`;
  return [num1 + num2, question];
};

const startGcdGame = () => {
  engineOfGames('Find the greatest common divisor of given numbers.', findGcdGame);
};
export default startGcdGame;
