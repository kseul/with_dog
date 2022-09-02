import styled from 'styled-components/macro';
import { ANSWER_DB } from '../constants/Test';
import { MBTIReactionProps } from '../MBTITest';

const ReactionAnswer = ({
  handleSetReactionName,
  onClickCheck,

  testId,
  labelName,
}: MBTIReactionProps) => {
  return (
    <AnswerList>
      {ANSWER_DB.map(({ id, name }) => (
        <AnswerLabel key={id}>
          <Answers
            key={testId}
            type="radio"
            value={name}
            name={labelName}
            onClick={onClickCheck}
            onChange={e => {
              handleSetReactionName(e.target.value, testId!);
            }}
          />
          <AnswersText>{name}</AnswersText>
        </AnswerLabel>
      ))}
    </AnswerList>
  );
};

const AnswerList = styled.div`
  ${props => props.theme.flex.flexBox('row', '', 'center')};
  margin-top: 0.625rem;
`;

const AnswerLabel = styled.label`
  ${props => props.theme.flex.flexBox('column', '', '')};
  margin: 0 1.25rem;
  font-size: 0.938rem;
  text-align: center;
`;

const Answers = styled.input`
  margin-top: 0.625rem;
`;

const AnswersText = styled.span`
  margin-top: 0.625rem;
  width: 6.25rem;
`;

export default ReactionAnswer;
