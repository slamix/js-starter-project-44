import readlineSync from 'readline-sync';

const greetings = () => {
   const name = readlineSync.question('May i have your name: ');
   return name;
};
export default greetings;
