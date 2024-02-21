import engineOfGames from '../index.js';
import { createNumFromRange } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const evenOrNotGame = () => {
  const num = createNumFromRange(0, 50);
  let rightAnswer = 'no';
  const question = num;
  if (isEven(num)) {
    rightAnswer = 'yes';
  }
  return [rightAnswer, question];
};

const startEvenOrNotGame = () => {
  engineOfGames('Answer "yes" if the number is even, otherwise answer "no".', evenOrNotGame);
};
export default startEvenOrNotGame;
