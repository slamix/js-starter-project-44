#!/usr/bin/env node

import readlineSync from 'readline-sync';
import func from '../scr/cli.js';

console.log('Welcome to the Brain Games!');
const name = func();
console.log(`Hello, ${name}!`);

const evenOrNot = (nameOfPlayer) => {
   console.log('Answer "yes" if the number is even, otherwise answer "no".');
   let countOfGoodAns = 0;
   const min = 0;
   const max = 51;
   let answer;
   let number;
   while (countOfGoodAns !== 3) {
      number = Math.random() * (max + 1);
      number = Math.floor(number);
      console.log(`Question: ${number}`);
      answer = readlineSync.question('Your answer: ');
      if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
         console.log('Correct!');
         countOfGoodAns++;
      } else {
         countOfGoodAns = 0;
         console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
         console.log(`Let's try again, ${nameOfPlayer}`);
      }
   }
   if (countOfGoodAns === 3) {
      console.log(`Congratulation, ${nameOfPlayer}`);
   }
};
evenOrNot(name);
