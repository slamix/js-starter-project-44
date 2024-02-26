import engineOfGames from '../index.js';
import { createNumFromRange } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const evenOrNotGame = () => {
  const num = createNumFromRange(0, 50);
  const question = num;
  const rightAnswer = isEven(num) ? 'yes' : 'no';
  return [rightAnswer, question];
};

const startEvenOrNotGame = () => {
  engineOfGames('Answer "yes" if the number is even, otherwise answer "no".', evenOrNotGame);
};
export default startEvenOrNotGame;
