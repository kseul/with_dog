import styled from 'styled-components/macro';
import ProgressBar from './ProgressBar';
import { useState } from 'react';
import EnergyTest from './Energy/EnergyTest';

export interface MBTIEnergyprops {
  handleSetEnergyName: (value: string, testId: number) => void;
  onClickCheck: () => void;
}

export interface AnswerType {
  testId: number;
  answerValue: string;
}

const MBTITest = () => {
  const [energyNameList, setEnergyNameList] = useState<AnswerType[]>([
    { testId: 0, answerValue: '' },
  ]);
  const [isChecked, setIsChecked] = useState(false);

  const onClickCheck = (): void => {
    setIsChecked(!isChecked);
  };

  const handleSetEnergyName = (value: string, id: number): void => {
    setEnergyNameList(
      energyNameList.concat({ testId: id, answerValue: value })
    );
    const inputItemsCopy = energyNameList;
    inputItemsCopy[id].answerValue = value;
    setEnergyNameList(inputItemsCopy);
  };

  console.log({ energyNameList });

  return (
    <MBTITestContainer>
      <ProgressBar />
      {/* {nameList.length === 5 ? (
        <RelationTest
          handleSetName={handleSetName}
          onClickCheck={onClickCheck}
        />
      ) : (
        <EnergyTest handleSetName={handleSetName} onClickCheck={onClickCheck} />
      )} */}
      <EnergyTest
        handleSetEnergyName={handleSetEnergyName}
        onClickCheck={onClickCheck}
      />
    </MBTITestContainer>
  );
};

const MBTITestContainer = styled.div`
  ${props => props.theme.flex.flexBox('column')}
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  background-color: #edeef0;
`;

export default MBTITest;
