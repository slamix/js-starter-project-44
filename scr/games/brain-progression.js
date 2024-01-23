#!/usr/bin/env node
import readlineSync from 'readline-sync';

const fillArr = (size, stepOf) => {
   const min = 0;
   const max = 50;
   const arr = [];
   const leftBorderOfSize = 5, rightBorderOfSize = 10;
   const firstNumber = Math.floor(min + Math.random() * (max - min + 1));
   arr[0] = firstNumber;
   for (let i = 1; i < size; i++) {
      arr[i] = arr[i - 1] + stepOf;
   }
   return arr;
};

const progression = (nameOfPlayer) => {
   let countOfGoodAns = 0;
   const leftBorderOfSize = 5, rightBorderOfSize = 10;
   console.log('What number is missing in the progression?');
   while (countOfGoodAns !== 3) {
      const step = Math.floor(1 + Math.random() * 10);
      const sizeOfArray = Math.floor(leftBorderOfSize + Math.random() * (rightBorderOfSize - leftBorderOfSize + 1));
      const arr = fillArr(sizeOfArray, step);
      const randomIndex = Math.floor(Math.random() * arr.length);
      arr[randomIndex] = '..';
      console.log(`Question: ${arr.join(' ')}`);
      const ansOfPlayer = readlineSync.question('Your answer: ');
      const goodAns = arr[randomIndex - 1] === '..' ? arr[randomIndex + 1] - step : arr[randomIndex - 1] + step;
      if (Number(ansOfPlayer) === goodAns) {
         console.log('Correct!');
         countOfGoodAns++;
      } else {
         console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer was '${goodAns}'.\nLet's try again, ${nameOfPlayer}`);
         countOfGoodAns = 0;
      }
   }
   console.log(`Congratulation, ${nameOfPlayer}!`);
};
export default progression;
