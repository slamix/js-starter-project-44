import {
  greeting,
  engineOfGames,
  setCongratulation,
} from '../index.js';
import createNum from '../support-functions.js';

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
    const answer = engineOfGames(progressionStr, missedElem.toString());
    if (answer) {
      countOfGoodAns += 1;
    } else {
      break;
    }
  }
  if (countOfGoodAns === 3) {
    setCongratulation();
  }
};
export default startProgressionGame;
