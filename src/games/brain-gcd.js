import engineOfGames from '../index.js';
import { createNumFromRange } from '../utils.js';

const findGcd = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum.toString();
  }
  return findGcd(secondNum, firstNum % secondNum);
};

const GcdGame = () => {
  const firstNum = createNumFromRange(1, 50);
  const secondNum = createNumFromRange(1, 50);
  const result = findGcd(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;
  return [result, question];
};

const startGcdGame = () => {
  engineOfGames('Find the greatest common divisor of given numbers.', GcdGame);
};
export default startGcdGame;
