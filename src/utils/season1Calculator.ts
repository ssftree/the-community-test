import { SEASON_1_QUESTIONS } from '../data/season1Questions';
import { Season1Question } from '../types';

export interface Season1AxisScore {
  codes: string; // e.g. 'LR', 'FE', 'WU', 'OC'
  code: string;  // e.g. 'L2', 'E4', 'W3', 'O2'
  letter: string; // 'L', 'E', 'W', 'O'
  strength: number; // 1, 2, 3
  isLeft: boolean;
  scoreColor: string;
}

export interface Season1CalculatedResult {
  resultType: string; // e.g. "L2-E4-W3-O2"
  fourLetterCode: string; // e.g. "LEWO"
  axes: {
    politics: Season1AxisScore;
    gender: Season1AxisScore;
    classGroup: Season1AxisScore;
    openness: Season1AxisScore;
  };
}

export const Bp: Record<string, string> = { L1: "#FF7719", L2: "#E38859", L3: "#B69687", R4: "#507C7E", R5: "#009095", R6: "#00A3AA" };
export const Hp: Record<string, string> = { F1: "#FF000A", F2: "#CE333B", F3: "#8B5758", E4: "#426371", E5: "#006E9A", E6: "#007AC2" };
export const Lp: Record<string, string> = { W1: "#D30000", W2: "#98000C", W3: "#5B2C2D", U4: "#27374B", U5: "#003B75", U6: "#003D9F" };
export const qp: Record<string, string> = { O1: "#FF3C43", O2: "#DB5D5F", O3: "#A27777", C4: "#8C9BA7", C5: "#72A0C3", C6: "#52A5DF" };

export function calculateSeason1Result(answers: Record<string, number>): Season1CalculatedResult {
  const getGroupAvg = (group: string, maxScale: number) => {
    const qs = SEASON_1_QUESTIONS.filter((q) => q.group === group);
    let total = 0;
    let count = 0;
    qs.forEach((q) => {
      const val = answers[q.id] || Math.round((maxScale + 1) / 2);
      const score = q.reverse ? (maxScale + 1 - val) : val;
      total += score;
      count += 1;
    });
    return count > 0 ? total / count : 3.5;
  };

  // 1. Politics (1..6)
  const polAvg = getGroupAvg('politics', 6);
  let polCode = 'L3';
  if (polAvg <= 2.2) polCode = 'L1';
  else if (polAvg <= 2.9) polCode = 'L2';
  else if (polAvg <= 3.5) polCode = 'L3';
  else if (polAvg <= 4.2) polCode = 'R4';
  else if (polAvg <= 4.9) polCode = 'R5';
  else polCode = 'R6';

  // 2. Gender (1..6)
  const genAvg = getGroupAvg('gender', 6);
  let genCode = 'F3';
  if (genAvg <= 2.2) genCode = 'F1';
  else if (genAvg <= 2.9) genCode = 'F2';
  else if (genAvg <= 3.5) genCode = 'F3';
  else if (genAvg <= 4.2) genCode = 'E4';
  else if (genAvg <= 4.9) genCode = 'E5';
  else genCode = 'E6';

  // 3. Class (1..4)
  const clsAvg = getGroupAvg('class', 4);
  let clsCode = 'W3';
  if (clsAvg <= 1.6) clsCode = 'W1';
  else if (clsAvg <= 2.1) clsCode = 'W2';
  else if (clsAvg <= 2.5) clsCode = 'W3';
  else if (clsAvg <= 3.0) clsCode = 'U4';
  else if (clsAvg <= 3.5) clsCode = 'U5';
  else clsCode = 'U6';

  // 4. Openness (1..6)
  const opnAvg = getGroupAvg('openness', 6);
  let opnCode = 'O3';
  if (opnAvg <= 2.2) opnCode = 'O1';
  else if (opnAvg <= 2.9) opnCode = 'O2';
  else if (opnAvg <= 3.5) opnCode = 'O3';
  else if (opnAvg <= 4.2) opnCode = 'C4';
  else if (opnAvg <= 4.9) opnCode = 'C5';
  else opnCode = 'C6';

  const getStrength = (code: string) => {
    const num = Number(code[1]);
    return num <= 3 ? 4 - num : num - 3;
  };

  const politics: Season1AxisScore = {
    codes: 'LR',
    code: polCode,
    letter: polCode[0],
    strength: getStrength(polCode),
    isLeft: polCode.startsWith('L'),
    scoreColor: Bp[polCode] || '#FF7719',
  };

  const gender: Season1AxisScore = {
    codes: 'FE',
    code: genCode,
    letter: genCode[0],
    strength: getStrength(genCode),
    isLeft: genCode.startsWith('F'),
    scoreColor: Hp[genCode] || '#FF000A',
  };

  const classGroup: Season1AxisScore = {
    codes: 'WU',
    code: clsCode,
    letter: clsCode[0],
    strength: getStrength(clsCode),
    isLeft: clsCode.startsWith('W'),
    scoreColor: Lp[clsCode] || '#D30000',
  };

  const openness: Season1AxisScore = {
    codes: 'OC',
    code: opnCode,
    letter: opnCode[0],
    strength: getStrength(opnCode),
    isLeft: opnCode.startsWith('O'),
    scoreColor: qp[opnCode] || '#FF3C43',
  };

  const fourLetterCode = `${politics.letter}${gender.letter}${classGroup.letter}${openness.letter}`;
  const resultType = `${polCode}-${genCode}-${clsCode}-${opnCode}`;

  return {
    resultType,
    fourLetterCode,
    axes: {
      politics,
      gender,
      classGroup,
      openness,
    },
  };
}
