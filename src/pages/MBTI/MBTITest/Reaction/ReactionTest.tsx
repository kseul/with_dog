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
            {testList}
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
  width: 800px;
  list-style: none;
`;

const Questions = styled.li`
  margin-top: 70px;
  font-size: 20px;
  text-align: center;
`;

export default ReactionTest;
