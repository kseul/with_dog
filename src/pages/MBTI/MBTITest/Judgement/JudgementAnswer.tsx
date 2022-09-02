import styled from 'styled-components/macro';
import { ANSWER_DB } from '../constants/Test';
import { MBTIJudgdemnetProps } from '../MBTITest';

const RelationAnswer = ({
  handleSetJudgementName,
  onClickCheck,
  testId,
  labelName,
}: MBTIJudgdemnetProps) => {
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
              handleSetJudgementName(e.target.value, testId!);
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

export default RelationAnswer;
