import styled from 'styled-components/macro';
import ReactionAnswer from './ReactionAnswer';
import MBTIButton from '../MBTIButton';
import { REACTION_TEST_DB } from '../constants/Test';
import { MBTIReactionProps } from 'types/type';

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
  list-style: none;
  width: 50rem;
  margin: 0 auto;
`;

const TestListText = styled.span`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  margin-bottom: 1rem;
  text-align: center;
`;

const Questions = styled.li`
  margin: 3.7rem 0;
  font-size: 1.2rem;
  font-weight: 350;
  color: #191919;
  text-align: center;
`;

export default ReactionTest;
