import {
  createNum,
  greeting,
  isRight,
  useRightAnswer,
  useWrongAnswer,
  setCongratulation,
} from '../index.js';

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
  greeting();
  let countOfGoodAns = 0;
  let countOfWrongAns = 0;
  let finishOfFunc;
  console.log('Find the greatest common divisor of given numbers.');
  while (countOfGoodAns !== 3 && countOfWrongAns < 1) {
    const firstNum = createNum();
    const secondNum = createNum();
    const goodAns = findGcd(firstNum, secondNum).toString();
    finishOfFunc = isRight(`${firstNum} ${secondNum}`, goodAns);
    if (finishOfFunc) {
      useRightAnswer();
      countOfGoodAns += 1;
    } else {
      useWrongAnswer(goodAns);
      countOfWrongAns += 1;
    }
  }
  if (countOfGoodAns === 3) {
    setCongratulation();
  }
};
export default startGcdGame;
