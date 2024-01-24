#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
   greeting,
   isRight,
   useRightAnswer,
   useWrongAnswer,
   setCongratulation,
} from '../index.js';

const printQuestion = (index, firstNum, secondNum) => {
   if (index === 0) {
      console.log(`Question: ${firstNum} + ${secondNum}`);
      return firstNum + secondNum;
   } else if (index === 1) {
      console.log(`Question: ${firstNum} - ${secondNum}`);
      return firstNum - secondNum;
   } else {
      console.log(`Question: ${firstNum} * ${secondNum}`);
      return firstNum * secondNum;
   }
};

const calc = () => {
   greeting();
   let countOfGoodAns = 0;
   let ansOfPlayer;
   let goodAns;
   let firstNum, secondNum;
   console.log('What is the result of the expression?');
   while (countOfGoodAns !== 3) {
      for (let i = 0; i < 3; i++) {
         firstNum = Math.floor(Math.random() * 30);
         secondNum = Math.floor(Math.random() * 30);
         goodAns = printQuestion(i, firstNum, secondNum);
         ansOfPlayer = readlineSync.question('Your answer: ');
         if (Number(ansOfPlayer) === goodAns) {
            useRightAnswer();
            countOfGoodAns++;
         } else {
            useWrongAnswer(goodAns);
            countOfGoodAns = 0;
            break;
         }
      }
   }
   setCongratulation();
};

export default calc;
