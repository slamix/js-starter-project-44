import readlineSync from 'readline-sync';

const engineOfGames = (mainQuestion, functionOfGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(mainQuestion);
  let countOfGoodAns = 0;
  while (countOfGoodAns !== 3) {
    const [goodAns, question] = functionOfGame();
    console.log(`Question: ${question}`);
    const ansOfPlayer = readlineSync.question('Your answer: ');
    if (String(goodAns) === ansOfPlayer) {
      console.log('Correct!');
      countOfGoodAns += 1;
    } else {
      console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer was '${goodAns}'.\nLet's try again, ${name}!`);
      break;
    }
    if (countOfGoodAns === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default engineOfGames;
