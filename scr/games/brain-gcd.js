#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gcd = (num1, num2) => {
   let firstNum = num1;
   let secondNum = num2;
   while (firstNum !== 0 && secondNum !== 0) {
      if (firstNum > secondNum) {
         firstNum %= secondNum;
      } else {
         secondNum %= firstNum;
      }
   }
   return firstNum + secondNum;
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
         break;
      }
   }
   if (countOfGoodAns === 3) {
      console.log(`Congratulations, ${nameOfPlayer}!`);
   }
};
export default gameGcd;
