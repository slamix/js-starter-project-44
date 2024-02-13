import {
  greeting,
  setCongratulation,
  engineOfGames,
} from '../index.js';
import createNum from '../support-functions.js';

let operator;
const operationResult = (a, b) => {
  const numberOperation = Math.floor(Math.random() * 3);
  let result;
  if (numberOperation === 1) {
    operator = '+';
    result = a + b;
  } else if (numberOperation === 2) {
    operator = '-';
    result = a - b;
  } else {
    operator = '*';
    result = a * b;
  }
  return result;
};

const startCalcGame = () => {
  greeting();
  let countOfGoodAns = 0;
  let wrongAns = 0;
  console.log('What is the result of the expression?');
  while (countOfGoodAns !== 3 && wrongAns < 1) {
    const firstNum = createNum();
    const secondNum = createNum();
    const goodAns = (operationResult(firstNum, secondNum)).toString();
    const ansOfPlayer = engineOfGames(`${firstNum} ${operator} ${secondNum}`, goodAns);
    if (ansOfPlayer) {
      countOfGoodAns += 1;
    } else {
      wrongAns += 1;
    }
  }
  if (countOfGoodAns === 3) {
    setCongratulation();
  }
};

export default startCalcGame;
