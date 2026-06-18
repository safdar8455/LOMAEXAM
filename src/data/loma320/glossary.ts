import { Question } from '../../types';
import { loma320GlossaryPart1Questions } from './glossarypart1';
import { loma320GlossaryPart2Questions } from './glossarypart2';
import { loma320GlossaryPart3Questions } from './glossarypart3';

export const loma320GlossaryQuestions: Question[] = [
  ...loma320GlossaryPart1Questions,
  ...loma320GlossaryPart2Questions,
  ...loma320GlossaryPart3Questions
];
