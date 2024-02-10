import {
  createNum,
  greeting,
  isRight,
  useRightAnswer,
  useWrongAnswer,
  setCongratulation,
} from '../index.js';

let missedElem;

const createProgression = () => {
  const progressionArr = [];
  const arrLength = Math.floor(5 + Math.random() * (10 - 5 + 1));
  const firstProgressionElem = createNum();
  let currentProgressionElem = firstProgressionElem;
  const progressionStep = Math.floor(1 + Math.random() * (10));
  const indexMissedElem = Math.floor(Math.random() * (arrLength - 0));

  for (let i = 0; i < arrLength; i += 1) {
    if (i === indexMissedElem) {
      progressionArr.push('..');
      missedElem = currentProgressionElem;
    } else {
      progressionArr.push(currentProgressionElem);
    }
    currentProgressionElem += progressionStep;
  }
  return progressionArr;
};

const startProgressionGame = () => {
  let countOfGoodAns = 0;
  greeting();
  console.log('What number is missing in the progression?');
  while (countOfGoodAns < 3) {
    const progressionStr = createProgression().join(' ');
    const answer = isRight(progressionStr, missedElem.toString());
    if (answer) {
      useRightAnswer();
      countOfGoodAns += 1;
    } else {
      useWrongAnswer(missedElem);
      countOfGoodAns = 0;
      break;
    }
  }
  if (countOfGoodAns === 3) {
    setCongratulation();
  }
};
export default startProgressionGame;
