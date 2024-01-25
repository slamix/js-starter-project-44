import readlineSync from 'readline-sync';

let name;
let ansOfPlayer;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const isRight = (expression, correctAnswer) => {
  console.log(`Question: ${expression}`);
  ansOfPlayer = readlineSync.question('Your answer: ');

  if (ansOfPlayer === correctAnswer) return true;
  return false;
};

export const useRightAnswer = () => console.log('Correct!');

export const useWrongAnswer = (result) => {
  console.log(`'${ansOfPlayer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
};

export const setCongratulation = () => console.log(`Congratulations, ${name}!`);
