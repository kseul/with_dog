import styled from 'styled-components/macro';
import { REACTION_TEST_DB } from '../constants/Test';
import MBTIButton from '../MBTIButton';
import { MBTIReactionProps } from '../MBTITest';
import ReactionAnswer from './ReactionAnswer';

const ReactionTest = ({
  handleSetReactionName,
  onClickCheck,
  reactionLength,
  onReactionCheck,
}: MBTIReactionProps) => {
  return (
    <TestDetailContainer>
      <TestList>
        {REACTION_TEST_DB.map(({ testId, testList, labelName }) => (
          <Questions key={testId}>
            <TestListText>{testList}</TestListText>
            <ReactionAnswer
              handleSetReactionName={handleSetReactionName}
              onClickCheck={onClickCheck}
              labelName={labelName}
              testId={testId}
            />
          </Questions>
        ))}
      </TestList>
      {reactionLength === 5 && <MBTIButton onCheck={onReactionCheck} />}
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
  width: 50rem;
  list-style: none;
`;

const TestListText = styled.span`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  text-align: center;
  margin-bottom: 1.25rem;
`;

const Questions = styled.li`
  margin: 1.875rem 0;
  font-size: 1.25rem;
  text-align: center;
`;

export default ReactionTest;
