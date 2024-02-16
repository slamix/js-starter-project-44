import engineOfGame from '../index.js';
import { createNum } from '../utils.js';

const findGcd = () => {
  let num1 = createNum(1, 50);
  let num2 = createNum(1, 50);
  console.log(`Question: ${num1} ${num2}`);
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return (num1 + num2);
};

const startGcdGame = () => {
  engineOfGame('Find the greatest common divisor of given numbers.', findGcd);
};
export default startGcdGame;
