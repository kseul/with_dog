import styled from 'styled-components/macro';
import { ANSWER_DB } from '../constants/Test';
import { MBTIJudgdemnetProps } from 'types/type';

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
  margin-top: 0.7rem;
`;

const AnswerLabel = styled.label`
  ${props => props.theme.flex.flexBox('column', 'center', '')};
  margin: 0 1.25rem;
  font-weight: 300;
  font-size: 0.9rem;
  color: #808080;
  text-align: center;
  width: 5rem;
`;

const Answers = styled.input`
  margin-top: 0.625rem;
`;

const AnswersText = styled.span`
  width: 6.205rem;
  margin-top: 0.625rem;
`;

export default RelationAnswer;
