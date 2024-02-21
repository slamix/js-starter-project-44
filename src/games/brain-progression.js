import engineOfGames from '../index.js';
import { createNumFromRange } from '../utils.js';

const progressionGame = () => {
  const progressionArr = [];
  const arrLength = createNumFromRange(5, 10);
  const firstProgressionElem = createNumFromRange(1, 30);
  let currentProgressionElem = firstProgressionElem;
  const progressionStep = createNumFromRange(1, 10);
  const indexMissedElem = createNumFromRange(0, arrLength - 1);
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

  const question = progressionArr.join(' ');
  return [missedElem, question];
};

const startProgressionGame = () => {
  engineOfGames('What number is missing in the progression?', progressionGame);
};
export default startProgressionGame;
