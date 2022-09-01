import styled from 'styled-components/macro';
import { RELATION_TEST_DB } from '../constants/Test';
import { MBTIRelationProps } from '../MBTITest';
import RelationAnswer from './RelationAnswer';
import MBTIButton from '../MBTIButton';

const RelationTest = ({
  handleSetRelationName,
  onClickCheck,
  relationLength,
  onRelationCheck,
}: MBTIRelationProps) => {
  return (
    <TestDetailContainer>
      <TestList>
        {RELATION_TEST_DB.map(({ testId, testList, labelName }) => (
          <Questions key={testId}>
            {testList}
            <RelationAnswer
              handleSetRelationName={handleSetRelationName}
              onClickCheck={onClickCheck}
              labelName={labelName}
              testId={testId}
            />
          </Questions>
        ))}
      </TestList>
      {relationLength === 5 && <MBTIButton onCheck={onRelationCheck} />}
    </TestDetailContainer>
  );
};

const TestDetailContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', '')};
  margin: 0 auto;
`;

const TestList = styled.ul`
  ${props => props.theme.flex.flexBox('column', '', '')};
  margin: 0 auto;
  width: 800px;
  list-style: none;
`;

const Questions = styled.li`
  margin: 35px 0;
  font-size: 20px;
  text-align: center;
`;

export default RelationTest;
