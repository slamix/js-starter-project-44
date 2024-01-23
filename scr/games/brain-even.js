#!/usr/bin/env node
import readlineSync from 'readline-sync';
import func from '../cli.js';
import { printQuestion, makeQACO } from '../index.js';

// makeQACO = make question, answer, compare and output

const evenOrNot = (nameOfPlayer) => {
   console.log('Answer "yes" if the number is even, otherwise answer "no".');
   let countOfGoodAns = 0;
   const min = 0;
   const max = 50;
   let answer;
   let number;
   let finishOfFunc;
   while (countOfGoodAns !== 3) {
      finishOfFunc = makeQACO();
      if (finishOfFunc === 'Correct!') {
         console.log(finishOfFunc);
         countOfGoodAns++;
      } else {
         countOfGoodAns = 0;
         console.log(finishOfFunc);
         console.log(`Let's try again, ${nameOfPlayer}`);
      }
   }
   console.log(`Congratulation, ${nameOfPlayer}!`);
};
export default evenOrNot;
