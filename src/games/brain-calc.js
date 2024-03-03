import engineOfGames from '../index.js';
import { createNumFromRange } from '../utils.js';

const calcFunction = (operator, firstNum, secondNum) => {
  let result;
  switch (operator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
      throw new Error('Unknown state!');
  }
  return result.toString();
};

const calcGame = () => {
  const arrWithOperators = ['+', '-', '*'];
  const idxOfOperator = createNumFromRange(0, 2);
  const operator = arrWithOperators[idxOfOperator];
  const firstNum = createNumFromRange(0, 30);
  const secondNum = createNumFromRange(0, 30);
  const goodAns = calcFunction(operator, firstNum, secondNum);
  const question = `${firstNum} ${operator} ${secondNum}`;
  return [goodAns, question];
};

const startCalcGame = () => {
  engineOfGames('What is the result of the expression?', calcGame);
};

export default startCalcGame;
