import styled from 'styled-components/macro';
import RelationAnswer from './JudgementAnswer';
import MBTIResultButton from '../MBTIResultButton';
import { JUDEGEMENT_TEST_DB } from '../constants/Test';
import { MBTIJudgdemnetProps } from 'types/type';

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
            <TestListText>{testList}</TestListText>
            <RelationAnswer
              handleSetJudgementName={handleSetJudgementName}
              onClickCheck={onClickCheck}
              labelName={labelName}
              testId={testId}
            />
          </Questions>
        ))}
      </TestList>
      {judgementLength === 5 && <MBTIResultButton onCheck={onJudgementCheck} />}
    </TestDetailContainer>
  );
};

const TestDetailContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', '')};
  margin: 0 auto;
`;

const TestList = styled.ul`
  ${props => props.theme.flex.flexBox('column', '', '')};
  list-style: none;
  width: 50rem;
  margin: 0 auto;
`;

const TestListText = styled.span`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  margin-bottom: 1.25rem;
  text-align: center;
`;

const Questions = styled.li`
  margin: 1.875rem 0;
  font-size: 1.25rem;
  text-align: center;
`;

export default JudgementTest;
