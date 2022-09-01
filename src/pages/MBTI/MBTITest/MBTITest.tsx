import styled from 'styled-components/macro';
import ProgressBar from './ProgressBar';
import { useState } from 'react';
import EnergyTest from './Energy/EnergyTest';

export interface Iprops {
  handleSetName: (value: string, testId: number) => void;
  onClickCheck: () => void;
}

export interface AnswerType {
  testId: number;
  answerValue: any;
}

const MBTITest = () => {
  const [energyNameList, setEnergyNameList] = useState<AnswerType[]>([
    { testId: 0, answerValue: '' },
  ]);
  const [isChecked, setIsChecked] = useState(false);

  const onClickCheck = (): void => {
    setIsChecked(!isChecked);
  };

  const handleSetName = (value: string, id: number): void => {
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
      <EnergyTest handleSetName={handleSetName} onClickCheck={onClickCheck} />
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
