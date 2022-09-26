export interface MBTIResultProps {
  id?: number;
  mbti: string;
  score: number;
  layout: string;
}

export interface ResultData {
  resultId: number;
  MBTIImage: string;
  MBTI: string;
  MBTICharacter: string;
  content: string;
  MBTIPosition: string;
}

export interface Counter {
  userNum: number;
}

export interface CountTime {
  startMS: number;
  duration: number;
  step?: number;
}
