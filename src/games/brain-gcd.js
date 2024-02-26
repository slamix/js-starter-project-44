import engineOfGames from '../index.js';
import { createNumFromRange } from '../utils.js';

const findGcd = (firstNum, secondNum) => {
  let copyOfFirstNum = firstNum;
  let copyOfSecondNum = secondNum;
  while (copyOfFirstNum !== 0 && copyOfSecondNum !== 0) {
    if (copyOfFirstNum > copyOfSecondNum) {
      copyOfFirstNum %= copyOfSecondNum;
    } else {
      copyOfSecondNum %= copyOfFirstNum;
    }
  }
  const result = (firstNum + secondNum).toString();
  return result;
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
