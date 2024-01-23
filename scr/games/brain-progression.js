#!/usr/bin/env node
import readlineSync from 'readline-sync';
import func from '../cli.js';

const fillArr = (stepOf, firstNumber, sizeOfArray) => {
   const arr = [];
   arr[0] = firstNumber;
   for (let i = 1; i < sizeOfArray; i++) {
      arr[i] = arr[i - 1] + stepOf;
   }
   return arr;
};

const progression = (nameOfPlayer) => {
   let firstNum, step;
   const min = 0;
   const max = 50;
   let arr = [];
   const leftBorderOfStep = 1, leftBorderOfSize = 5;
   const rightBorderOfStep = 10, rightBorderOfSize = 10;
   let randomIndex, sizeOfArr, previousIndex;
   let ansOfPlayer, goodAns, countOfGoodAns = 0;
   console.log('What number is missing in the progression?');
   while (countOfGoodAns !== 3) {
      firstNum = Math.floor(min + Math.random() * (max - min + 1));
      step = Math.floor(leftBorderOfStep + Math.random() * (rightBorderOfStep - leftBorderOfStep + 1));
      sizeOfArr = Math.floor(leftBorderOfSize + Math.random() * (rightBorderOfSize - leftBorderOfSize + 1));
      do {
         randomIndex = Math.floor(Math.random() * (arr.length));
      } while (randomIndex === previousIndex);
      previousIndex = randomIndex;
      arr = fillArr(step, firstNum, sizeOfArr);
      arr[randomIndex] = '..';
      console.log(`Question: ${arr.join(' ')}`);
      ansOfPlayer = readlineSync.question('Your answer: ');
      if (arr.at(-1) === '..') {
         goodAns = arr[randomIndex - 1] + step;
      } else if (arr[0] === '..') {
         goodAns = arr[randomIndex + 1] - step;
      } else {
         goodAns = arr[randomIndex + 1] - step;
      }
      if (Number(ansOfPlayer) === goodAns) {
         console.log('Correct!');
         countOfGoodAns++;
      } else {
         console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer was '${goodAns}'`);
         countOfGoodAns = 0;
         console.log(`Let's try again, ${nameOfPlayer}.`);
      }
   }
   console.log(`Congratulation, ${nameOfPlayer}!`);
};
export default progression;
