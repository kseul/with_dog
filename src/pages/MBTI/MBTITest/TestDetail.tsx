import styled from 'styled-components/macro';
import Answer from './Answer';
import { ENERGY_TEST_DB } from './constants/Test';

const TestDetail = () => {
  return (
    <TestDetailContainer>
      <TestList>
        {ENERGY_TEST_DB.map(({ id, testList }) => (
          <Questions key={id}>
            {testList} <Answer />
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
