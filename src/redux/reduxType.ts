import { MBTIScoreProps } from 'pages/MBTI/MBTITest/type';

export interface mbtiResultAction {
  type: string;
  data?: MBTIScoreProps[];
}
