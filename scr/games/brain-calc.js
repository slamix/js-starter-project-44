#!/usr/bin/env node
import readlineSync from 'readline-sync';
import func from '../cli.js';
import { printQuestion, makeQACO } from '../index.js';

// makeQACO = make question, answer, compare and output

const calc = (nameOfPlayer) => {
   let countOfGoodAns = 0;
   let finishOfFunc;
   console.log('What is the result of the expression?');
   while (countOfGoodAns !== 3) {
      for (let i = 0; i < 3; i++) {
         finishOfFunc = makeQACO(i);
         if (finishOfFunc === 'Correct!') {
            console.log(finishOfFunc);
            countOfGoodAns++;
         } else {
            countOfGoodAns = 0;
            console.log(finishOfFunc);
            console.log(`Let's try again, ${nameOfPlayer}`);
            break;
         }
      }
   }
   console.log(`Congratulation, ${nameOfPlayer}!`);
};
export default calc;
