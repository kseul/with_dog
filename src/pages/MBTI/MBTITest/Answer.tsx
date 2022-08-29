import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { ANSWER_DB } from './constants/Test';

const Answer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [checked, setChecked] = useState<string | undefined>();
  const [nameList, setNameList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.value);
  };

  const onClickCheck = (): void => {
    setIsChecked(!isChecked);
  };

  const handleSetName = (value: string): void => {
    setNameList([value, ...nameList]);
  };

  return (
    <AnswerList>
      {ANSWER_DB.map(({ id, name }) => (
        <AnswerLabel key={id}>
          <Answers
            type="radio"
            value={name}
            onClick={() => {
              onClickCheck();
            }}
            checked={checked === name}
            onChange={e => {
              handleChange(e);
              handleSetName(e.target.value);
            }}
          />
          {name}
        </AnswerLabel>
      ))}
    </AnswerList>
  );
};

const AnswerList = styled.li`
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

export default Answer;
