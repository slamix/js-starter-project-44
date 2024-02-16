import engineOfGame from '../index.js';
import { createNum } from '../utils.js';

let operator;
const operationResult = () => {
  const a = createNum(0, 30);
  const b = createNum(0, 30);
  const numberOfOperation = createNum(1, 3);
  let result;
  switch (numberOfOperation) {
    case 1:
      operator = '+';
      result = a + b;
      break;
    case 2:
      operator = '-';
      result = a - b;
      break;
    default:
      operator = '*';
      result = a * b;
      break;
  }

  console.log(`Question: ${a} ${operator} ${b}`);
  return result;
};

const startCalcGame = () => {
  engineOfGame('What is the result of the expression?', operationResult);
};

export default startCalcGame;
