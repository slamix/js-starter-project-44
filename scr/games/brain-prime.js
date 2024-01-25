#!/usr/bin/env node
import readlineSync from 'readline-sync';

const primeNum = (number) => {
  let d = 2;
  let result = 'yes';
  while (d * d < number) {
    if (number % d === 0) {
      result = 'no';
      break;
    } else {
      d++;
    }
  }
  if (d * d === number) {
    result = 'no';
  }
  return result;
};

const primeGame = (nameOfPlayer) => {
  let ansOfPlayer;
  let goodAns;
  let countOfGoodAns = 0;
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
      countOfGoodAns += 1;
    } else {
      console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer was '${goodAns}'`);
      console.log(`Let's try again, ${nameOfPlayer}!`);
      countOfGoodAns = 0;
      break;
    }
  }
  if (countOfGoodAns === 3) {
    console.log(`Congratulations, ${nameOfPlayer}!`);
  }
};
export default primeGame;
