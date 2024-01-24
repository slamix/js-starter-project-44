#!/usr/bin/env node
import {
   greeting,
   isRight,
   useRightAnswer,
   useWrongAnswer,
   setCongratulation,
} from '../index.js';

const evenOrNot = () => {
   greeting();
   console.log('Answer "yes" if the number is even, otherwise answer "no".');
   let countOfGoodAns = 0;
   let ansOfPlayer, goodAns;
   let num;
   while (countOfGoodAns !== 3) {
      num = Math.floor(Math.random() * 50);
      if (num % 2 === 0) {
         goodAns = 'yes';
      } else {
         goodAns = 'no';
      }
      ansOfPlayer = isRight(num, goodAns);
      if (ansOfPlayer) {
         useRightAnswer();
         countOfGoodAns++;
      } else {
         useWrongAnswer(goodAns);
         countOfGoodAns = 0;
      }
   }
   setCongratulation();
};
export default evenOrNot;
