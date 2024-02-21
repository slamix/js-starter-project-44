import engineOfGames from '../index.js';
import { createNumFromRange } from '../utils.js';

const calcGame = () => {
  const a = createNumFromRange(0, 30);
  const b = createNumFromRange(0, 30);
  const numberOfOperation = createNumFromRange(1, 3);
  let result;
  let operator;
  switch (numberOfOperation) {
    case 1:
      operator = '+';
      result = a + b;
      break;
    case 2:
      operator = '-';
      result = a - b;
      break;
    case 3:
      operator = '*';
      result = a * b;
      break;
    default:
      throw new Error('Unknown state!');
  }
  const question = `${a} ${operator} ${b}`;
  return [result, question];
};

const startCalcGame = () => {
  engineOfGames('What is the result of the expression?', calcGame);
};

export default startCalcGame;
