import readlineSync from 'readline-sync';

let name;
let ansOfPlayer;

export const createNum = () => Math.floor(Math.random() * 30);

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const engineOfGames = (question, goodAnswer) => {
  console.log(`Question: ${question}`);
  ansOfPlayer = readlineSync.question('Your answer: ');
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

export const setCongratulation = () => console.log(`Congratulations, ${name}!`);
