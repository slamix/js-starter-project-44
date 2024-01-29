import {
  createNum,
  greeting,
  isRight,
  useRightAnswer,
  useWrongAnswer,
  setCongratulation,
} from '../index.js';

const startEvenOrNotGame = () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countOfGoodAns = 0;
  let ansOfPlayer;
  let goodAns;
  while (countOfGoodAns !== 3) {
    const num = createNum();
    if (num % 2 === 0) {
      goodAns = 'yes';
    } else {
      goodAns = 'no';
    }
    ansOfPlayer = isRight(num, goodAns);
    if (ansOfPlayer) {
      useRightAnswer();
      countOfGoodAns += 1;
    } else {
      useWrongAnswer(goodAns);
      countOfGoodAns = 0;
      break;
    }
  }
  if (countOfGoodAns === 3) {
    setCongratulation();
  }
};
export default startEvenOrNotGame;
