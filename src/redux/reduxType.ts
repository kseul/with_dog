import { MBTIScoreProps } from 'types/type';

export interface mbtiResultAction {
  type: string;
  data?: MBTIScoreProps[];
}
