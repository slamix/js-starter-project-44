import engineOfGame from '../index.js';
import { createNum } from '../utils.js';

const createProgression = () => {
  const progressionArr = [];
  const arrLength = createNum(5, 10);
  const firstProgressionElem = createNum(1, 30);
  let currentProgressionElem = firstProgressionElem;
  const progressionStep = createNum(1, 10);
  const indexMissedElem = createNum(0, arrLength);
  let missedElem;
  for (let i = 0; i < arrLength; i += 1) {
    if (i === indexMissedElem) {
      progressionArr.push('..');
      missedElem = currentProgressionElem;
    } else {
      progressionArr.push(currentProgressionElem);
    }
    currentProgressionElem += progressionStep;
  }

  console.log(`Question: ${progressionArr.join(' ')}`);
  return missedElem;
};

const startProgressionGame = () => {
  engineOfGame('What number is missing in the progression?', createProgression);
};
export default startProgressionGame;
