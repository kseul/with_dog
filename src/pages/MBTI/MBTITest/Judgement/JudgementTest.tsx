import styled from 'styled-components/macro';
import { JUDEGEMENT_TEST_DB } from '../constants/Test';
import { MBTIJudgdemnetProps } from '../MBTITest';
import RelationAnswer from './JudgementAnswer';
import MBTIButton from '../MBTIButton';
import MBTIResultButton from '../MBTIResultButton';

const JudgementTest = ({
  handleSetJudgementName,
  onClickCheck,
  judgementLength,
  onJudgementCheck,
}: MBTIJudgdemnetProps) => {
  return (
    <TestDetailContainer>
      <TestList>
        {JUDEGEMENT_TEST_DB.map(({ testId, testList, labelName }) => (
          <Questions key={testId}>
            {testList}
            <RelationAnswer
              handleSetJudgementName={handleSetJudgementName}
              onClickCheck={onClickCheck}
              labelName={labelName}
              testId={testId}
            />
          </Questions>
        ))}
      </TestList>
      {judgementLength === 6 && <MBTIResultButton onCheck={onJudgementCheck} />}
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
  margin-top: 70px;
  font-size: 20px;
  text-align: center;
`;

export default JudgementTest;
