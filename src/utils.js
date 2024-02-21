import readlineSync from 'readline-sync';

export const createNumFromRange = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
