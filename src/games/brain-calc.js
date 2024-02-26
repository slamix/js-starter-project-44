import engineOfGames from '../index.js';
import { createNumFromRange } from '../utils.js';

const calcFunction = (numberOfOperation, firstNum, secondNum) => {
  let operator;
  let result;
  switch (numberOfOperation) {
    case 1:
      operator = '+';
      result = firstNum + secondNum;
      break;
    case 2:
      operator = '-';
      result = firstNum - secondNum;
      break;
    case 3:
      operator = '*';
      result = firstNum * secondNum;
      break;
    default:
      throw new Error('Unknown state!');
  }
  result = result.toString();
  return [result, operator];
};

const calcGame = () => {
  const firstNum = createNumFromRange(0, 30);
  const secondNum = createNumFromRange(0, 30);
  const numberOfOperation = createNumFromRange(1, 3);
  const [goodAns, operator] = calcFunction(numberOfOperation, firstNum, secondNum);
  const question = `${firstNum} ${operator} ${secondNum}`;
  return [goodAns, question];
};

const startCalcGame = () => {
  engineOfGames('What is the result of the expression?', calcGame);
};

export default startCalcGame;
