import styled from 'styled-components/macro';
import ProgressBar from './ProgressBar';
import { useState } from 'react';
import EnergyTest from './Energy/EnergyTest';
import RelationTest from './Relation/RelationTest';
import ReactionTest from './Reaction/ReactionTest';
import JudgementTest from './Judgement/JudgementTest';

export interface MBTIProps {
  onClickCheck: () => void;
  testId?: number | undefined;
  labelName?: string;
}

export interface MBTIEnergyProps extends MBTIProps {
  handleSetEnergyName: (value: string, testId: number) => void;
  energyLength?: number;
  onEnergyCheck?: () => void;
}

export interface MBTIRelationProps extends MBTIProps {
  handleSetRelationName: (value: string, testId: number) => void;
  relationLength?: number;
  onRelationCheck?: () => void;
}

export interface MBTIReactionProps extends MBTIProps {
  handleSetReactionName: (value: string, testId: number) => void;
  reactionLength?: number;
  onReactionCheck?: () => void;
}

export interface MBTIJudgdemnetProps extends MBTIProps {
  handleSetJudgementName: (value: string, testId: number) => void;
  judgementLength?: number;
  onJudgementCheck?: () => void;
}

export interface AnswerType {
  testId: number;
  answerValue: string;
}
export interface PercentType {
  abc: number;
}

const MBTITest = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  const [nextRelationPage, setNextRelationPage] = useState(false);
  const [nextReactionPage, setNextReactionPage] = useState(false);
  const [nextJudgementPage, setNextJudgementPage] = useState(false);

  const [energyNameList, setEnergyNameList] = useState<AnswerType[]>([]);
  const [relationNameList, setRelationNameList] = useState<AnswerType[]>([]);
  const [reactionNameList, setReactionNameList] = useState<AnswerType[]>([]);
  const [judgementNameList, setJudgementNameList] = useState<AnswerType[]>([]);

  const onClickCheck = (): void => {
    setIsChecked(!isChecked);
  };

  const onEnergyCheck = (): void => {
    setNextPage(!nextPage);
  };

  const onRelationCheck = (): void => {
    setNextRelationPage(!nextRelationPage);
  };

  const onReactionCheck = (): void => {
    setNextReactionPage(!nextReactionPage);
  };

  const onJudgementCheck = (): void => {
    setNextJudgementPage(!nextJudgementPage);
  };

  const handleSetEnergyName = (value: string, id: number): void => {
    setEnergyNameList(
      energyNameList.concat({ testId: id, answerValue: value })
    );
    const inputItemsCopy = energyNameList;
    inputItemsCopy[id].answerValue = value;
    setEnergyNameList(inputItemsCopy);
  };

  const handleSetRelationName = (value: string, id: number): void => {
    setRelationNameList(
      relationNameList.concat({ testId: id, answerValue: value })
    );
    const inputItemsCopy = relationNameList;
    inputItemsCopy[id].answerValue = value;
    setRelationNameList(inputItemsCopy);
  };

  const handleSetReactionName = (value: string, id: number): void => {
    setReactionNameList(
      reactionNameList.concat({ testId: id, answerValue: value })
    );
    const inputItemsCopy = reactionNameList;
    inputItemsCopy[id].answerValue = value;
    setReactionNameList(inputItemsCopy);
  };

  const handleSetJudgementName = (value: string, id: number): void => {
    setJudgementNameList(
      judgementNameList.concat({ testId: id, answerValue: value })
    );
    const inputItemsCopy = judgementNameList;
    inputItemsCopy[id].answerValue = value;
    setJudgementNameList(inputItemsCopy);
  };

  const energyLength = energyNameList.length;
  const relationLength = relationNameList.length;
  const reactionLength = reactionNameList.length;
  const judgementLength = judgementNameList.length;
  const abc = energyLength + relationLength + reactionLength + judgementLength;

  return (
    <MBTITestContainer>
      <ProgressBar abc={abc} />
      <TestBox>
        {nextPage === false && (
          <EnergyTest
            handleSetEnergyName={handleSetEnergyName}
            onClickCheck={onClickCheck}
            energyLength={energyLength}
            onEnergyCheck={onEnergyCheck}
          />
        )}

        {nextPage === true && nextRelationPage === false && (
          <RelationTest
            handleSetRelationName={handleSetRelationName}
            onClickCheck={onClickCheck}
            relationLength={relationLength}
            onRelationCheck={onRelationCheck}
          />
        )}
        {nextPage === true &&
          nextRelationPage === true &&
          nextReactionPage === false && (
            <ReactionTest
              handleSetReactionName={handleSetReactionName}
              onClickCheck={onClickCheck}
              reactionLength={reactionLength}
              onReactionCheck={onReactionCheck}
            />
          )}
        {nextPage === true &&
          nextRelationPage === true &&
          nextReactionPage === true && (
            <JudgementTest
              handleSetJudgementName={handleSetJudgementName}
              onClickCheck={onClickCheck}
              judgementLength={judgementLength}
              onJudgementCheck={onJudgementCheck}
            />
          )}
      </TestBox>
    </MBTITestContainer>
  );
};

const MBTITestContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  background-color: #edeef0;
`;

const TestBox = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 1200px;
  height: 100vh;
  background-color: white;
  border-radius: 20px;
`;

export default MBTITest;
