import readlineSync from 'readline-sync';

const engineOfGames = (mainQuestion, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(mainQuestion);
  const countOfRounds = 3;
  for (let countOfGoodAns = 0; countOfGoodAns < countOfRounds; countOfGoodAns += 1) {
    const [goodAns, question] = gameData();
    console.log(`Question: ${question}`);
    const ansOfPlayer = readlineSync.question('Your answer: ');
    if (goodAns !== ansOfPlayer) {
      console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer was '${goodAns}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default engineOfGames;
