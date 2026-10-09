export type Language = 'zh-CN' | 'zh-TW' | 'ko' | 'en' | 'ja' | 'es' | 'fr';

export type DimensionKey = 'personal' | 'social' | 'ethical';
export type AnswerValue = 'O' | 'X';

export interface AxisResult {
  dimension: DimensionKey;
  groupKo: string;
  leftKo: string;
  rightKo: string;
  leftCount: number;
  rightCount: number;
  total: number;
  leftPercent: number;
  rightPercent: number;
  winningSideKo: string;
  code: string; // B, H, S, A, M, U
  intensity: 1 | 2; // 1 = moderate, 2 = strong (>=25% diff)
  symbolFile: string; // e.g. 'b2.svg'
}

export interface TestResult {
  fullCode: string; // e.g. 'B2S2M2', 'H1A2U1'
  threeLetterCode: string; // e.g. 'R–A–U', 'P–S–M'
  resultTypeKo: string; // e.g. '결과·능력·실리'
  meaning: AxisResult; // personal (B vs H)
  agency: AxisResult;  // social (S vs A)
  judgment: AxisResult; // ethical (M vs U)
  archetypeId: string;
  answers: Record<string, AnswerValue>;
  timestamp: number;
}

export type Season1Dimension = 'politics' | 'gender' | 'openness' | 'class';

export interface Season1Question {
  id: string;
  group: Season1Dimension;
  prompt: Record<Language, string>;
  reverse: boolean;
  scale: 4 | 6;
}

export interface Season1Result {
  resultType: string; // e.g. "L2-E4-W3-O2"
  fourLetterCode: string; // e.g. "LEWO"
  scores: {
    politics: { code: string; label: string; score: number; isLeft: boolean };
    gender: { code: string; label: string; score: number; isLeft: boolean };
    classGroup: { code: string; label: string; score: number; isLeft: boolean };
    openness: { code: string; label: string; score: number; isLeft: boolean };
  };
}
