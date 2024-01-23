#!/usr/bin/env node
import readlineSync from 'readline-sync';

const fillArr = (stepOf) => {
   const min = 0;
   const max = 50;
   const arr = [];
   const leftBorderOfSize = 5, rightBorderOfSize = 10;
   const firstNumber = Math.floor(min + Math.random() * (max - min + 1));
   const sizeOfArray = Math.floor(leftBorderOfSize + Math.random() * (rightBorderOfSize - leftBorderOfSize + 1));
   arr[0] = firstNumber;
   for (let i = 1; i < sizeOfArray; i++) {
      arr[i] = arr[i - 1] + stepOf;
   }
   return arr;
};

const progression = (nameOfPlayer) => {
   let randomIndex, previousIndex, ansOfPlayer, goodAns, countOfGoodAns = 0;
   const leftBorderOfStep = 1, rightBorderOfStep = 10;
   console.log('What number is missing in the progression?');
   while (countOfGoodAns !== 3) {
      const step = Math.floor(leftBorderOfStep + Math.random() * (rightBorderOfStep - leftBorderOfStep + 1));
      const arr = fillArr(step);
      do {
         randomIndex = Math.floor(Math.random() * (arr.length));
      } while (randomIndex === previousIndex);
      previousIndex = randomIndex;
      arr[randomIndex] = '..';
      console.log(`Question: ${arr.join(' ')}`);
      ansOfPlayer = readlineSync.question('Your answer: ');
      if (arr.at(-1) === '..') {
         goodAns = arr[randomIndex - 1] + step;
      } else {
         goodAns = arr[randomIndex + 1] - step;
      }
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
