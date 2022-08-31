import { useState } from 'react';
import styled from 'styled-components/macro';
import Answer from './Answer';
import { ENERGY_TEST_DB } from './constants/Test';
export interface Iprops {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetName: (value: string, id: number) => void;
}

const TestDetail = () => {
  const [checked, setChecked] = useState<string | undefined>();
  const [nameList, setNameList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.value);
  };

  const handleSetName = (value: string, id: number): void => {
    const addAnswer = [...nameList];
  };

  console.log({ nameList });
  return (
    <TestDetailContainer>
      <TestList>
        {ENERGY_TEST_DB.map(({ id, testList }) => (
          <Questions key={id}>
            {testList}
            <Answer handleChange={handleChange} handleSetName={handleSetName} />
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

const TestList = styled.li`
  ${props => props.theme.flex.flexBox('column', '', '')};
  margin: 0 auto;
  width: 800px;
  list-style: none;
`;

const Questions = styled.div`
  margin-top: 70px;
  font-size: 20px;
  text-align: center;
`;

export default TestDetail;
