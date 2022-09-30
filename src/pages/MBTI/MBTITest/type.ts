export interface TestData {
  testId: number;
  testList: string;
  labelName: string;
}

export interface AnswerData {
  id: number;
  name: string;
}

export interface MBTIProps {
  onClickCheck: () => void;
  testId?: number;
  labelName?: string;
}

export interface MBTIEnergyProps extends MBTIProps {
  handleSetEnergyName: (value: string, id: number) => void;
  energyLength?: number;
  onEnergyCheck?: () => void;
}

export interface MBTIRelationProps extends MBTIProps {
  handleSetRelationName: (value: string, id: number) => void;
  relationLength?: number;
  onRelationCheck?: () => void;
}

export interface MBTIReactionProps extends MBTIProps {
  handleSetReactionName: (value: string, id: number) => void;
  reactionLength?: number;
  onReactionCheck?: () => void;
}

export interface MBTIJudgdemnetProps extends MBTIProps {
  handleSetJudgementName: (value: string, id: number) => void;
  judgementLength?: number;
  onJudgementCheck?: () => void;
}

export interface MBTIScoreProps {
  id?: number | null;
  mbti?: string;
  score?: number | null;
  layout?: string;
}

export interface JoinMBTI {
  mbti?: string;
}

export interface AnswerType {
  testId: number | null;
  answerValue?: string;
}

export interface SendMBTI {
  mbti?: string;
}
