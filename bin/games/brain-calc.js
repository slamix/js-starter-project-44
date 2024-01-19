#!/usr/bin/env node
import readlineSync from 'readline-sync';
import func from '../../scr/cli.js';
import { printQuestion, makeQACO } from '../../scr/index.js';

console.log('Welcome to the Brain Games!');
const name = func();
console.log(`Hello, ${name}!`);
// makeQACO = make question, answer, compare and output

const calc = (nameOfPlayer) => {
   let countOfGoodAns = 0;
   const LEFT = 0;
   const RIGHT = 30;
   let ansOfPlayer;
   let firstNum;
   let secondNum;
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
calc(name);
