import readlineSync from 'readline-sync';

const func = () => {
   const name = readlineSync.question('May i have your name? ');
   console.log(`Hello, ${name}!`);
   return name;
};
export default func;
