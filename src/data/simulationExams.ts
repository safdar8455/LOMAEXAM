import { Question } from '../types';
import { chapter1Questions } from './chapter1';
import { chapter2Questions } from './chapter2';
import { chapter3Questions } from './chapter3';
import { chapter4Questions } from './chapter4';
import { chapter5Questions } from './chapter5';
import { chapter6Questions } from './chapter6';
import { chapter7Questions } from './chapter7';
import { chapter8Questions } from './chapter8';
import { chapter9Questions } from './chapter9';
import { chapter10Questions } from './chapter10';
import { chapter11Questions } from './chapter11';
import { chapter12Questions } from './chapter12';
import { chapter13Questions } from './chapter13';
import { chapter14Questions } from './chapter14';
import { tpgChapterQuestions } from './tpgChapterQuestions';
import { finalExamQuestions } from './finalExam';

const getQuestions = (chapter: Question[], count: number, startOffset: number): Question[] => {
  return chapter.slice(startOffset, startOffset + count);
};

// Weighting based on official TPG Sample Exam distribution
const createSimulationRound = (offset: number): Question[] => {
  return [
    ...getQuestions(chapter1Questions, 4, offset),
    ...getQuestions(chapter2Questions, 5, offset),
    ...getQuestions(chapter3Questions, 3, offset),
    ...getQuestions(chapter4Questions, 4, offset),
    ...getQuestions(chapter5Questions, 4, offset),
    ...getQuestions(chapter6Questions, 5, offset),
    ...getQuestions(chapter7Questions, 4, offset),
    ...getQuestions(chapter8Questions, 5, offset),
    ...getQuestions(chapter9Questions, 4, offset),
    ...getQuestions(chapter10Questions, 4, offset),
    ...getQuestions(chapter11Questions, 4, offset),
    ...getQuestions(chapter12Questions, 5, offset),
    ...getQuestions(chapter13Questions, 4, offset),
    ...getQuestions(chapter14Questions, 5, offset),
    ...getQuestions(tpgChapterQuestions, 10,offset),
    ...getQuestions(finalExamQuestions, 15, offset),

  ].slice(0, 60);
};

export const simulationRounds: Question[][] = Array.from({ length: 21 }, (_, i) => createSimulationRound(i * 6));
