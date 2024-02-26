import engineOfGames from '../index.js';
import { createNumFromRange } from '../utils.js';

const createProgression = (arrLength, firstElem, progressionStep, indexOfMissedElem) => {
  const progressionArr = [];
  progressionArr[0] = firstElem;
  for (let i = 1; i < arrLength; i += 1) {
    progressionArr[i] = progressionArr[i - 1] + progressionStep;
  }
  const missedElem = progressionArr[indexOfMissedElem].toString();
  progressionArr[indexOfMissedElem] = '..';
  return [missedElem, progressionArr];
};

const progressionGame = () => {
  const arrLength = createNumFromRange(5, 10);
  const firstProgressionElem = createNumFromRange(1, 30);
  const progressionStep = createNumFromRange(1, 10);
  const indexOfMissedElem = createNumFromRange(0, arrLength - 1);
  const [rightAns, progressionArr] = createProgression(arrLength, firstProgressionElem, progressionStep, indexOfMissedElem);
  const question = progressionArr.join(' ');
  return [rightAns, question];
};

const startProgressionGame = () => {
  engineOfGames('What number is missing in the progression?', progressionGame);
};
export default startProgressionGame;
