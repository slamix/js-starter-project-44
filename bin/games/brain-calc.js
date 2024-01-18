#!/usr/bin/env node
import readlineSync from 'readline-sync';
import func from '../../scr/cli.js';

console.log('Welcome to the Brain Games!');
const name = func();
console.log(`Hello, ${name}!`);

const calc = (nameOfPlayer) => {
   let countOfGoodAns = 0;
   const LEFT = 0;
   const RIGHT = 30;
   let ansOfPlayer;
   let firstNum;
   let secondNum;
   let result;
   console.log('What is the result of the expression?');
   while (countOfGoodAns !== 3) {
      for (let i = 0; i < 3; i++) {
         firstNum = Math.floor(LEFT + Math.random() * (RIGHT + 1));
         secondNum = Math.floor(LEFT + Math.random() * (RIGHT + 1));
         if (i === 0) {
            result = firstNum + secondNum;
            console.log(`Question: ${firstNum} + ${secondNum}`);
            ansOfPlayer = readlineSync.question('Your answer: ');
            if (firstNum + secondNum === Number(ansOfPlayer)) {
               console.log('Correct!');
               countOfGoodAns++;
            } else {
               console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer is '${result}'.`);
               countOfGoodAns = 0;
               console.log(`Let's try again, ${nameOfPlayer}`);
               break;
            }
         } else if (i === 1) {
            result = firstNum - secondNum;
            console.log(`Question: ${firstNum} - ${secondNum}`);
            ansOfPlayer = readlineSync.question('Your answer: ');
            if (firstNum - secondNum === Number(ansOfPlayer)) {
               console.log('Correct!');
               countOfGoodAns++;
            } else {
               console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer is '${result}'.`);
               countOfGoodAns = 0;
               console.log(`Let's try again, ${nameOfPlayer}`);
               break;
            }
         } else {
            result = firstNum * secondNum;
            console.log(`Question: ${firstNum} * ${secondNum}`);
            ansOfPlayer = readlineSync.question('Your answer: ');
            if (firstNum * secondNum === Number(ansOfPlayer)) {
               console.log('Correct!');
               countOfGoodAns++;
            } else {
               console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer is '${result}'.`);
               countOfGoodAns = 0;
               console.log(`Let's try again, ${nameOfPlayer}`);
               break;
            }
         }
      }
   }
   console.log(`Congratulation, ${nameOfPlayer}`);
};
calc(name);
