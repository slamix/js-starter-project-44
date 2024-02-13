import readlineSync from 'readline-sync';

const engineOfGames = (question, goodAnswer, name) => {
  console.log(`Question: ${question}`);
  const ansOfPlayer = readlineSync.question('Your answer: ');
  let result;
  if (ansOfPlayer === goodAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer was '${goodAnswer}'.\nLet's try again, ${name}!`);
    result = false;
  }
  return result;
};

export default engineOfGames;
