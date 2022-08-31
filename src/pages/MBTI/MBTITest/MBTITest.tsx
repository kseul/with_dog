import styled from 'styled-components/macro';
import ProgressBar from './ProgressBar';
import EnergyTest from './EnergyTest';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export interface Iprops {
  handleSetName: (value: string, testId: number) => void;
  onClickCheck: () => void;
}

export interface AnswerType {
  testId: number;
  answerValue: any;
}

const MBTITest = () => {
  const [nameList, setNameList] = useState<AnswerType[]>([
    { testId: 0, answerValue: '' },
  ]);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const onClickCheck = (): void => {
    setIsChecked(!isChecked);
  };

  const handleSetName = (value: string, id: number): void => {
    setNameList(nameList.concat({ testId: id, answerValue: value }));
    const inputItemsCopy = nameList;
    inputItemsCopy[id].answerValue = value;
    setNameList(inputItemsCopy);
  };

  console.log({ nameList });

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
