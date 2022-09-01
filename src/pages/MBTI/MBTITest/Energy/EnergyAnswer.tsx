import styled from 'styled-components/macro';
import { ANSWER_DB } from '../constants/Test';
import { MBTIEnergyProps } from '../MBTITest';

const EnergyAnswer = ({
  handleSetName,
  onClickCheck,
  testId,
  labelName,
}: MBTIEnergyProps) => {
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
              handleSetName(e.target.value, testId!);
            }}
          />
          {name}
        </AnswerLabel>
      ))}
    </AnswerList>
  );
};

const AnswerList = styled.div`
  ${props => props.theme.flex.flexBox('row', '', 'center')};
  margin-top: 10px;
`;

const AnswerLabel = styled.label`
  ${props => props.theme.flex.flexBox('column', '', '')};
  margin: 0 20px;
  font-size: 15px;
  text-align: center;
`;

const Answers = styled.input`
  margin-top: 10px;
`;

export default EnergyAnswer;
