#!/usr/bin/env node
import readlineSync from 'readline-sync';
import func from '../cli.js';

const primeNum = (number) => {
   let d = 2;
   while (d * d < number) {
      if (number % d === 0) {
         return 'no';
      } else {
         d++;
      }
   }
   if (d * d === number) {
      return 'no';
   }
   return 'yes';
};

const primeGame = (nameOfPlayer) => {
   let ansOfPlayer, goodAns, countOfGoodAns = 0;
   const leftBorder = 2;
   const rightBorder = 110;
   let number;
   console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
   while (countOfGoodAns !== 3) {
      number = Math.floor(leftBorder + Math.random() * (rightBorder - leftBorder + 1));
      console.log(`Question: ${number}`);
      ansOfPlayer = readlineSync.question('Your answer: ');
      goodAns = primeNum(number);
      if (ansOfPlayer === goodAns) {
         console.log('Correct!');
         countOfGoodAns++;
      } else {
         console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer was '${goodAns}'`);
         countOfGoodAns = 0;
         console.log(`Let's try again, ${nameOfPlayer}`);
      }
   }
   console.log(`Congratulation, ${nameOfPlayer}!`);
};
export default primeGame;
