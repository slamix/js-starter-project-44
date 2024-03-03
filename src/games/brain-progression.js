import engineOfGames from '../index.js';
import { createNumFromRange } from '../utils.js';

const createProgression = (firstElem, progressionStep, arrLength) => {
  const progressionArr = [];
  progressionArr[0] = firstElem;
  for (let i = 1; i < arrLength; i += 1) {
    progressionArr[i] = progressionArr[i - 1] + progressionStep;
  }
  return progressionArr;
};

const progressionGame = () => {
  const arrLength = createNumFromRange(5, 10);
  const firstElem = createNumFromRange(1, 30);
  const progressionStep = createNumFromRange(1, 10);
  const idxOfMissedElem = createNumFromRange(0, arrLength - 1);
  const progressionArr = createProgression(firstElem, progressionStep, arrLength);
  const rightAns = progressionArr[idxOfMissedElem].toString();
  progressionArr[idxOfMissedElem] = '..';
  const question = progressionArr.join(' ');
  return [rightAns, question];
};

const startProgressionGame = () => {
  engineOfGames('What number is missing in the progression?', progressionGame);
};
export default startProgressionGame;
