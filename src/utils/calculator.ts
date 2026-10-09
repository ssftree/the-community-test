import { QUESTIONS_DATA, DIMENSIONS_CONFIG, DimensionType } from '../data/questions';
import { AxisResult, TestResult, AnswerValue } from '../types';

export function calculateTestResult(answers: Record<string, AnswerValue>): TestResult {
  // 1. Personal dimension (의미 vs 실리)
  const personalQuestions = QUESTIONS_DATA.filter(q => q.dimension === 'personal');
  let meaningCount = 0;
  let utilityCount = 0;

  personalQuestions.forEach(q => {
    const ans = answers[q.id];
    if (ans === 'O') {
      if (q.agreeValueKo === '의미') meaningCount++;
      else utilityCount++;
    } else if (ans === 'X') {
      if (q.agreeValueKo === '의미') utilityCount++;
      else meaningCount++;
    }
  });

  const personalTotal = personalQuestions.length;
  const meaningPercent = Math.round((meaningCount / personalTotal) * 100);
  const utilityPercent = 100 - meaningPercent;
  const meaningWins = meaningPercent >= utilityPercent;
  const meaningCode = meaningWins ? 'B' : 'H';
  const meaningIntensity: 1 | 2 = Math.abs(meaningPercent - utilityPercent) >= 25 ? 2 : 1;
  const meaningWinningSideKo = meaningWins ? '의미' : '실리';

  const meaningAxis: AxisResult = {
    dimension: 'personal',
    groupKo: '의미-실리',
    leftKo: '의미',
    rightKo: '실리',
    leftCount: meaningCount,
    rightCount: utilityCount,
    total: personalTotal,
    leftPercent: meaningPercent,
    rightPercent: utilityPercent,
    winningSideKo: meaningWinningSideKo,
    code: meaningCode,
    intensity: meaningIntensity,
    symbolFile: `${meaningCode.toLowerCase()}${meaningIntensity}.svg`,
  };

  // 2. Social dimension (구조 vs 능력)
  const socialQuestions = QUESTIONS_DATA.filter(q => q.dimension === 'social');
  let structureCount = 0;
  let abilityCount = 0;

  socialQuestions.forEach(q => {
    const ans = answers[q.id];
    if (ans === 'O') {
      if (q.agreeValueKo === '구조') structureCount++;
      else abilityCount++;
    } else if (ans === 'X') {
      if (q.agreeValueKo === '구조') abilityCount++;
      else structureCount++;
    }
  });

  const socialTotal = socialQuestions.length;
  const structurePercent = Math.round((structureCount / socialTotal) * 100);
  const abilityPercent = 100 - structurePercent;
  const structureWins = structurePercent >= abilityPercent;
  const structureCode = structureWins ? 'S' : 'A';
  const structureIntensity: 1 | 2 = Math.abs(structurePercent - abilityPercent) >= 25 ? 2 : 1;
  const structureWinningSideKo = structureWins ? '구조' : '능력';

  const agencyAxis: AxisResult = {
    dimension: 'social',
    groupKo: '구조-능력',
    leftKo: '구조',
    rightKo: '능력',
    leftCount: structureCount,
    rightCount: abilityCount,
    total: socialTotal,
    leftPercent: structurePercent,
    rightPercent: abilityPercent,
    winningSideKo: structureWinningSideKo,
    code: structureCode,
    intensity: structureIntensity,
    symbolFile: `${structureCode.toLowerCase()}${structureIntensity}.svg`,
  };

  // 3. Ethical dimension (원칙 vs 결과)
  const ethicalQuestions = QUESTIONS_DATA.filter(q => q.dimension === 'ethical');
  let principlesCount = 0;
  let resultsCount = 0;

  ethicalQuestions.forEach(q => {
    const ans = answers[q.id];
    if (ans === 'O') {
      if (q.agreeValueKo === '원칙') principlesCount++;
      else resultsCount++;
    } else if (ans === 'X') {
      if (q.agreeValueKo === '원칙') resultsCount++;
      else principlesCount++;
    }
  });

  const ethicalTotal = ethicalQuestions.length;
  const principlesPercent = Math.round((principlesCount / ethicalTotal) * 100);
  const resultsPercent = 100 - principlesPercent;
  const principlesWins = principlesPercent >= resultsPercent;
  const principlesCode = principlesWins ? 'M' : 'U';
  const principlesIntensity: 1 | 2 = Math.abs(principlesPercent - resultsPercent) >= 25 ? 2 : 1;
  const principlesWinningSideKo = principlesWins ? '원칙' : '결과';

  const judgmentAxis: AxisResult = {
    dimension: 'ethical',
    groupKo: '원칙-결과',
    leftKo: '원칙',
    rightKo: '결과',
    leftCount: principlesCount,
    rightCount: resultsCount,
    total: ethicalTotal,
    leftPercent: principlesPercent,
    rightPercent: resultsPercent,
    winningSideKo: principlesWinningSideKo,
    code: principlesCode,
    intensity: principlesIntensity,
    symbolFile: `${principlesCode.toLowerCase()}${principlesIntensity}.svg`,
  };

  // Official full code: `${r.code}${r.intensity}${s.code}${s.intensity}${c.code}${c.intensity}`
  // meaning, agency, judgment
  const fullCode = `${meaningAxis.code}${meaningAxis.intensity}${agencyAxis.code}${agencyAxis.intensity}${judgmentAxis.code}${judgmentAxis.intensity}`;

  // Korean result type: e.g. "원칙·구조·의미"
  const resultTypeKo = `${judgmentAxis.winningSideKo}·${agencyAxis.winningSideKo}·${meaningAxis.winningSideKo}`;

  // Letter mapping in original Korean show:
  // 원칙 -> P, 결과 -> R
  // 구조 -> S, 능력 -> A
  // 의미 -> M, 실리 -> U
  const qSMap: Record<string, string> = {
    원칙: 'P',
    결과: 'R',
    구조: 'S',
    능력: 'A',
    의미: 'M',
    실리: 'U',
  };

  const threeLetterCode = [
    qSMap[judgmentAxis.winningSideKo],
    qSMap[agencyAxis.winningSideKo],
    qSMap[meaningAxis.winningSideKo],
  ].join('–');

  const archetypeId = `${meaningAxis.code}-${agencyAxis.code}-${judgmentAxis.code}`;

  return {
    fullCode,
    threeLetterCode,
    resultTypeKo,
    meaning: meaningAxis,
    agency: agencyAxis,
    judgment: judgmentAxis,
    archetypeId,
    answers,
    timestamp: Date.now(),
  };
}
