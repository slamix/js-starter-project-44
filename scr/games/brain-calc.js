#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
   greeting,
   isRight,
   useRightAnswer,
   useWrongAnswer,
   setCongratulation,
} from '../index.js';

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

const calc = () => {
   greeting();
   let countOfGoodAns = 0;
   let ansOfPlayer, goodAns, wrongAns;
   let firstNum, secondNum;
   console.log('What is the result of the expression?');
   while (countOfGoodAns !== 3 && wrongAns !== 1) {
      for (let i = 0; i < 3; i++) {
         firstNum = Math.floor(Math.random() * 30);
         secondNum = Math.floor(Math.random() * 30);
         goodAns = String(operationResult(firstNum, secondNum));
         ansOfPlayer = isRight(`${firstNum} ${operator} ${secondNum}`, goodAns);
         if (ansOfPlayer) {
            useRightAnswer();
            countOfGoodAns++;
         } else {
            useWrongAnswer(goodAns);
            wrongAns++;
         }
      }
   }
   if (countOfGoodAns === 3) {
      setCongratulation();
   }
};

export default calc;
