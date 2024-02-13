import {
  greeting,
  setCongratulation,
  engineOfGames,
} from '../index.js';
import createNum from '../support-functions.js';

const evenOrNot = (number) => {
  let result;
  if (number % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const startEvenOrNotGame = () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countOfGoodAns = 0;
  while (countOfGoodAns !== 3) {
    const num = createNum();
    const goodAns = evenOrNot(num);
    const ansOfPlayer = engineOfGames(num, goodAns);
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
