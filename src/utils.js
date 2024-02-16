import readlineSync from 'readline-sync';

export const createNum = (a, b) => Math.floor(a + Math.random() * (b - a + 1));

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
