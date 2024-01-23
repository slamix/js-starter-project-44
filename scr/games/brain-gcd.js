#!/usr/bin/env node
import readlineSync from 'readline-sync';
import func from '../cli.js';

const gcd = (num1, num2) => {
   if (num2 === 0) {
      return num1;
   } else if (num1 === 0) {
      return num2;
   }
   while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) {
         num1 %= num2;
      } else {
         num2 %= num1;
      }
   }
   return num1 + num2;
};
const gameGcd = (nameOfPlayer) => {
   let result, ansOfPlayer, countOfGoodAns = 0;
   const min = 0;
   const max = 50;
   let firstNum;
   let secondNum;
   console.log('Find a greatest divisor of given numbers.');
   while (countOfGoodAns !== 3) {
      firstNum = Math.floor(min + Math.random() * (max + 1));
      secondNum = Math.floor(min + Math.random() * (max + 1));
      console.log(`Question: ${firstNum} ${secondNum}`);
      result = gcd(firstNum, secondNum);
      ansOfPlayer = readlineSync.question('Your answer: ');
      if (result === Number(ansOfPlayer)) {
         console.log('Correct!');
         countOfGoodAns++;
      } else {
         countOfGoodAns = 0;
         console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer was '${result}'.`);
         console.log(`Let's try again, ${nameOfPlayer}`);
      }
   }
   console.log(`Congratulation, ${nameOfPlayer}!`);
};
export default gameGcd;
