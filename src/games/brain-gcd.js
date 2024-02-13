import engineOfGames from '../index.js';
import {
  createNum,
  greeting,
} from '../support-functions.js';

const findGcd = (num1, num2) => {
  let firstNum = num1;
  let secondNum = num2;
  while (firstNum !== 0 && secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }
  return firstNum + secondNum;
};

const startGcdGame = () => {
  const name = greeting();
  let countOfGoodAns = 0;
  let countOfWrongAns = 0;
  console.log('Find the greatest common divisor of given numbers.');
  while (countOfGoodAns !== 3 && countOfWrongAns < 1) {
    const firstNum = createNum();
    const secondNum = createNum();
    const goodAns = findGcd(firstNum, secondNum).toString();
    const ansOfPlayer = engineOfGames(`${firstNum} ${secondNum}`, goodAns, name);
    if (ansOfPlayer) {
      countOfGoodAns += 1;
    } else {
      countOfWrongAns += 1;
    }
  }
  if (countOfGoodAns === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default startGcdGame;
