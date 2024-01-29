import {
  createNum,
  greeting,
  isRight,
  useRightAnswer,
  useWrongAnswer,
  setCongratulation,
} from '../index.js';

const isPrimeNum = (number) => {
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
  return result;
};

const startPrimeGame = () => {
  greeting();
  let countOfGoodAns = 0;
  let countOfWrongAns = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (countOfGoodAns !== 3 && countOfWrongAns < 1) {
    const number = createNum();
    const goodAns = isPrimeNum(number).toString();
    const finishOfFunc = isRight(`${number}`, goodAns);
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
export default startPrimeGame;
