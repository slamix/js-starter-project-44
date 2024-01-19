import readlineSync from 'readline-sync';

const printQuestion = (index, firstNum, secondNum) => {
   if (index === 0) {
      console.log(`Question: ${firstNum} + ${secondNum}`);
      return firstNum + secondNum;
   } else if (index === 1) {
      console.log(`Question: ${firstNum} - ${secondNum}`);
      return firstNum - secondNum;
   } else {
      console.log(`Question: ${firstNum} * ${secondNum}`);
      return firstNum * secondNum;
   }
};

const makeQACO = (index = -1) => { // makeQACO = make question, answer, compare and output
   const min = 0;
   const max = 30;
   let number;
   let ansOfPlayer;
   let firstNum, secondNum, goodAns;
   if (index === -1) {
      number = Math.floor(min + Math.random() * (max + 1));
      console.log(`Question: ${number}`);
      ansOfPlayer = readlineSync.question('Your answer: ');
      if ((number % 2 === 0 && ansOfPlayer === 'yes') || (number % 2 !== 0 && ansOfPlayer === 'no')) {
         return 'Correct!';
      } else if (firstNum % 2 === 0 && ansOfPlayer === 'no') {
         return `'${ansOfPlayer}' is wrong answer ;(. Correct answer was 'yes'`;
      } else {
         return `'${ansOfPlayer}' is wrong answer ;(. Correct answer was 'yes'`;
      }
   } else if (index !== -1) {
      firstNum = Math.floor(min + Math.random() * (max + 1));
      secondNum = Math.floor(min + Math.random() * (max + 1));
      goodAns = printQuestion(index, firstNum, secondNum);
      ansOfPlayer = readlineSync.question('Your answer: ');
      if (goodAns === Number(ansOfPlayer)) {
         return 'Correct!';
      } else {
         return `'${ansOfPlayer}' is wrong answer ;(. Correct answer was '${goodAns}'`;
      }
   }
};
export { printQuestion, makeQACO };
