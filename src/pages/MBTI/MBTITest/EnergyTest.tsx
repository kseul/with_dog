import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import Answer from './Answer';
import { ENERGY_TEST_DB } from './constants/Test';

export interface Iprops {
  handleSetName: (value: string, testId: number) => void;
  onClickCheck: () => void;
  labelName: string;
  testId: number;
}

export interface AnswerType {
  id: number | string;
  value: string;
}

const EnergyTest = () => {
  const [questionID, setQuestionId] = useState<number | undefined>();
  const [nameList, setNameList] = useState<AnswerType>({ id: '', value: '' });
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const onClickCheck = (): void => {
    setIsChecked(!isChecked);
  };

  const handleSetName = (value: string, testId: number): void => {
    const a = { testId, value };
    // setNameList(nameList.concat(a));
  };

  // console.log({ nameList });

  // const nextQuestion = () => {
  //   if (nameList.length === 5) {
  //     navigate('RelationTest');
  //   }
  // };

  return (
    <TestDetailContainer>
      <TestList>
        {ENERGY_TEST_DB.map(({ testId, testList, labelName }) => (
          <Questions key={testId}>
            {testList}
            <Answer
              handleSetName={handleSetName}
              onClickCheck={onClickCheck}
              labelName={labelName}
              testId={testId}
            />
          </Questions>
        ))}
      </TestList>
    </TestDetailContainer>
  );
};

const TestDetailContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 1200px;
  height: 800px;
  background-color: white;
  border-radius: 20px;
`;

const TestList = styled.ul`
  ${props => props.theme.flex.flexBox('column', '', '')};
  margin: 0 auto;
  width: 800px;
  list-style: none;
`;

const Questions = styled.li`
  margin-top: 70px;
  font-size: 20px;
  text-align: center;
`;

export default EnergyTest;
