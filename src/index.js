import readlineSync from 'readline-sync';
import { greeting } from './utils.js';

const engineOfGame = (mainQuestion, functionOfGoodAnswer) => {
  const name = greeting();
  console.log(mainQuestion);
  let countOfGoodAns = 0;
  let countOfWrongAns = 0;
  while (countOfGoodAns !== 3 && countOfWrongAns < 1) {
    const goodAns = functionOfGoodAnswer();
    const ansOfPlayer = readlineSync.question('Your answer: ');
    if (goodAns.toString() === ansOfPlayer) {
      console.log('Correct!');
      countOfGoodAns += 1;
    } else {
      countOfWrongAns += 1;
      console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer was '${goodAns}'.\nLet's try again, ${name}!`);
    }
  }
  if (countOfGoodAns === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default engineOfGame;
