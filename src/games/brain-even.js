import {
  createNum,
  greeting,
  setCongratulation,
  engineOfGames,
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
    ansOfPlayer = engineOfGames(num, goodAns);
    if (ansOfPlayer) {
      countOfGoodAns += 1;
    } else {
      break;
    }
  }
  if (countOfGoodAns === 3) {
    setCongratulation();
  }
};
export default startEvenOrNotGame;
