import readlineSync from 'readline-sync';

const func = () => {
   let name = readlineSync.question("May i have your name? ");
   console.log(`Hello, ${name}!`);
};
export default func;