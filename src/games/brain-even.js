import engineOfGame from '../index.js';
import { createNum } from '../utils.js';

const evenOrNot = () => {
  const number = createNum(0, 50);
  let result;
  if (number % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  console.log(`Question: ${number}`);
  return result;
};

const startEvenOrNotGame = () => {
  engineOfGame('Answer "yes" if the number is even, otherwise answer "no".', evenOrNot);
};
export default startEvenOrNotGame;
