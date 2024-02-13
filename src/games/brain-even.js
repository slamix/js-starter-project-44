import engineOfGames from '../index.js';
import {
  createNum,
  greeting,
} from '../support-functions.js';

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
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countOfGoodAns = 0;
  while (countOfGoodAns !== 3) {
    const num = createNum();
    const goodAns = evenOrNot(num);
    const ansOfPlayer = engineOfGames(num, goodAns, name);
    if (ansOfPlayer) {
      countOfGoodAns += 1;
    } else {
      break;
    }
  }
  if (countOfGoodAns === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default startEvenOrNotGame;
